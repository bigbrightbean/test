import pygame
import os
import random
import heapq

# Initialize Pygame
print("Initializing Pygame...")
pygame.init()
print("Pygame initialized!")

# Constants
SCREEN_WIDTH, SCREEN_HEIGHT = 1920, 1080
TILE_SIZE = 96
FPS = 30
ASPECT_RATIO = 16 / 9  # Fixed aspect ratio

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
LIGHT_GRAY = (200, 200, 200)

# Initialize Screen
print("Setting up the screen...")
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT), pygame.RESIZABLE)
pygame.display.set_caption("Tile-Based Movement with Background and Randomized Avatars")
print("Screen initialized!")

# Game Variables
CHARACTER_POS = [4, 4]  # Initial tile position (x, y)
TILEMAP_WIDTH = SCREEN_WIDTH // TILE_SIZE
TILEMAP_HEIGHT = SCREEN_HEIGHT // TILE_SIZE
fullscreen = False
conversation = None  # Store the current conversation text
options = []  # Store the current options for the question
npc_interaction_index = -1

# Paths
script_dir = os.path.dirname(os.path.abspath(__file__))
assets_dir = os.path.join(script_dir, "assets")

# Load Font for Korean Support
korean_font_path = os.path.join(assets_dir, "Noto_Sans_KR", "NotoSansKR-Regular.ttf")  # Path to the font
try:
    font_korean = pygame.font.Font(korean_font_path, 36)
    print("Korean font loaded successfully!")
except FileNotFoundError:
    print(f"Korean font not found at {korean_font_path}. Ensure the file is present.")
    pygame.quit()
    exit()

# Load Background
bg_path = os.path.join(assets_dir, "bg_beige tiles.png")
try:
    print(f"Loading background from {bg_path}...")
    background = pygame.image.load(bg_path).convert()
    background = pygame.transform.scale(background, (TILE_SIZE, TILE_SIZE))
    print("Background loaded successfully!")
except pygame.error as e:
    print(f"Error loading background: {e}")
    pygame.quit()
    exit()

# Load Player Avatar
avatar_player_path = os.path.join(assets_dir, "avatar_player.png")
try:
    print(f"Loading player avatar from {avatar_player_path}...")
    player_avatar = pygame.image.load(avatar_player_path).convert_alpha()
    player_avatar = pygame.transform.scale(player_avatar, (TILE_SIZE, TILE_SIZE))
    print("Player avatar loaded successfully!")
except pygame.error as e:
    print(f"Error loading player avatar: {e}")
    pygame.quit()
    exit()

# Load NPC Avatars
npc_avatars = []
for i in range(1, 11):
    avatar_path = os.path.join(assets_dir, f"avatar_{i}.png")
    try:
        avatar = pygame.image.load(avatar_path).convert_alpha()
        avatar = pygame.transform.scale(avatar, (TILE_SIZE, TILE_SIZE))
        npc_avatars.append(avatar)
    except pygame.error as e:
        print(f"Error loading NPC avatar {i}: {e}")
        pygame.quit()
        exit()

# Assign specific words and answers to each NPC
npc_word_map = {
    "avatar_1": ("milk", "우유", "바나나"),    # Correct: 우유
    "avatar_2": ("bread", "빵", "치즈"),     # Correct: 빵
    "avatar_3": ("cheese", "치즈", "우유"),  # Correct: 치즈
    "avatar_4": ("butter", "버터", "사과"),  # Correct: 버터
    "avatar_5": ("apple", "사과", "포도"),   # Correct: 사과
    "avatar_6": ("banana", "바나나", "빵"),  # Correct: 바나나
    "avatar_7": ("carrot", "당근", "파이"),  # Correct: 당근
    "avatar_8": ("grapes", "포도", "스테이크"), # Correct: 포도
    "avatar_9": ("pie", "파이", "당근"),     # Correct: 파이
    "avatar_10": ("steak", "스테이크", "버터") # Correct: 스테이크
}

# Randomize NPC positions
def generate_random_positions():
    positions = []
    while len(positions) < len(npc_avatars):
        x = random.randint(0, TILEMAP_WIDTH - 1)
        y = random.randint(0, TILEMAP_HEIGHT - 2)  # Exclude the last row
        if [x, y] != CHARACTER_POS and [x, y] not in positions:
            positions.append([x, y])
    return positions

npc_positions = generate_random_positions()

# Pathfinding Function (A*)
def find_path(start, goal, obstacles):
    def heuristic(a, b):
        return abs(a[0] - b[0]) + abs(a[1] - b[1])

    open_set = []
    heapq.heappush(open_set, (0, start))
    came_from = {}
    g_score = {start: 0}
    f_score = {start: heuristic(start, goal)}

    while open_set:
        current = heapq.heappop(open_set)[1]

        if current == goal:
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.reverse()
            return path

        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            neighbor = (current[0] + dx, current[1] + dy)
            if 0 <= neighbor[0] < TILEMAP_WIDTH and 0 <= neighbor[1] < TILEMAP_HEIGHT - 1 and neighbor not in obstacles:
                tentative_g_score = g_score[current] + 1
                if neighbor not in g_score or tentative_g_score < g_score[neighbor]:
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g_score
                    f_score[neighbor] = tentative_g_score + heuristic(neighbor, goal)
                    heapq.heappush(open_set, (f_score[neighbor], neighbor))

    return []  # No path found

# Move Character Function
def move_character(position, direction):
    x, y = position

    new_x, new_y = x, y
    if direction == "up" and y > 0:
        new_y -= 1
    elif direction == "down" and y < TILEMAP_HEIGHT - 2:
        new_y += 1
    elif direction == "left" and x > 0:
        new_x -= 1
    elif direction == "right" and x < TILEMAP_WIDTH - 1:
        new_x += 1

    # Prevent movement into NPCs
    if [new_x, new_y] not in npc_positions:
        x, y = new_x, new_y

    return [x, y]

# Functions
def draw_background():
    for y in range(TILEMAP_HEIGHT - 1):  # Leave the last row empty
        for x in range(TILEMAP_WIDTH):
            screen.blit(background, (x * TILE_SIZE, y * TILE_SIZE))

def draw_player_avatar(x, y):
    screen.blit(player_avatar, (x * TILE_SIZE, y * TILE_SIZE))

def draw_npc_avatars():
    for i, (x, y) in enumerate(npc_positions):
        screen.blit(npc_avatars[i], (x * TILE_SIZE, y * TILE_SIZE))

def display_conversation_box(word="", correct_translation="", incorrect_translation=""):
    # Box Position and Size
    box_x = 0
    box_y = (TILEMAP_HEIGHT - 1) * TILE_SIZE
    box_width = SCREEN_WIDTH
    box_height = TILE_SIZE

    # Draw the box
    box_rect = pygame.Rect(box_x, box_y, box_width, box_height)
    pygame.draw.rect(screen, LIGHT_GRAY, box_rect)  # Light gray background
    pygame.draw.rect(screen, BLACK, box_rect, 2)  # Black border

    # Centered Text Rendering
    if word:
        word_text = font_korean.render(f"{word}?", True, BLACK)
        word_rect = word_text.get_rect(center=(box_width // 2, box_y + TILE_SIZE // 4))
        screen.blit(word_text, word_rect)

    # Options (Aligned Properly)
    if correct_translation and incorrect_translation:
        left_text = font_korean.render(f"[<] {correct_translation}", True, BLACK)
        right_text = font_korean.render(f"[>] {incorrect_translation}", True, BLACK)

        screen.blit(left_text, (box_x + 20, box_y + TILE_SIZE // 2))
        screen.blit(right_text, (box_width - right_text.get_width() - 20, box_y + TILE_SIZE // 2))

# Constrain resizing to maintain the 16:9 aspect ratio
def constrain_resize(event):
    global screen, TILE_SIZE, TILEMAP_WIDTH, TILEMAP_HEIGHT, background, player_avatar, npc_avatars

    new_width = event.w
    new_height = int(new_width / ASPECT_RATIO)

    if new_height > event.h:
        new_height = event.h
        new_width = int(new_height * ASPECT_RATIO)

    screen = pygame.display.set_mode((new_width, new_height), pygame.RESIZABLE)
    TILE_SIZE = new_width // TILEMAP_WIDTH

    # Resize assets proportionally
    background = pygame.transform.scale(pygame.image.load(bg_path), (TILE_SIZE, TILE_SIZE))
    player_avatar = pygame.transform.scale(pygame.image.load(avatar_player_path), (TILE_SIZE, TILE_SIZE))
    npc_avatars = [pygame.transform.scale(pygame.image.load(os.path.join(assets_dir, f"avatar_{i + 1}.png")), (TILE_SIZE, TILE_SIZE)) for i in range(len(npc_avatars))]

# Main Game Loop
running = True
clock = pygame.time.Clock()
target_tile = None
path = []
is_moving = False

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.VIDEORESIZE:
            constrain_resize(event)

        if event.type == pygame.KEYDOWN and conversation:
            if event.key == pygame.K_COMMA:  # Left option (<)
                if options[0][1] == npc_word_map[f"avatar_{npc_interaction_index + 1}"][1]:
                    print("Correct!")
                else:
                    print("Wrong!")
                conversation = None
                options = []

            elif event.key == pygame.K_PERIOD:  # Right option (>)
                if options[1][1] == npc_word_map[f"avatar_{npc_interaction_index + 1}"][1]:
                    print("Correct!")
                else:
                    print("Wrong!")
                conversation = None
                options = []

        if event.type == pygame.MOUSEBUTTONDOWN:
            mouse_x, mouse_y = pygame.mouse.get_pos()
            clicked_tile = [mouse_x // TILE_SIZE, mouse_y // TILE_SIZE]

            if clicked_tile in npc_positions:
                npc_interaction_index = npc_positions.index(clicked_tile)
                npc_pos = npc_positions[npc_interaction_index]

                # Find path to the closest adjacent tile of the NPC
                obstacles = set(tuple(pos) for pos in npc_positions)
                free_tiles = [(npc_pos[0] + dx, npc_pos[1] + dy) for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]]
                free_tiles = [tile for tile in free_tiles if 0 <= tile[0] < TILEMAP_WIDTH and 0 <= tile[1] < TILEMAP_HEIGHT - 1 and tile not in obstacles]

                shortest_path = None
                for tile in free_tiles:
                    potential_path = find_path(tuple(CHARACTER_POS), tile, obstacles)
                    if potential_path and (shortest_path is None or len(potential_path) < len(shortest_path)):
                        shortest_path = potential_path

                if shortest_path:
                    path = shortest_path
                    target_tile = path[-1]
                    is_moving = True

    keys = pygame.key.get_pressed()
    if keys[pygame.K_UP]:
        CHARACTER_POS = move_character(CHARACTER_POS, "up")
    if keys[pygame.K_DOWN]:
        CHARACTER_POS = move_character(CHARACTER_POS, "down")
    if keys[pygame.K_LEFT]:
        CHARACTER_POS = move_character(CHARACTER_POS, "left")
    if keys[pygame.K_RIGHT]:
        CHARACTER_POS = move_character(CHARACTER_POS, "right")

    if is_moving and path:
        next_step = path.pop(0)
        CHARACTER_POS = [next_step[0], next_step[1]]
        if not path:
            is_moving = False

    if not is_moving and conversation is None:
        for i, npc_pos in enumerate(npc_positions):
            if tuple(CHARACTER_POS) in [(npc_pos[0] + dx, npc_pos[1] + dy) for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]]:
                npc_word, correct_translation, incorrect_translation = npc_word_map[f"avatar_{i + 1}"]
                conversation = (npc_word, correct_translation, incorrect_translation)
                options = [("<", correct_translation), (">", incorrect_translation)]
                npc_interaction_index = i

    screen.fill(WHITE)
    draw_background()
    draw_npc_avatars()
    draw_player_avatar(*CHARACTER_POS)

    # Always render the conversation box
    if conversation:
        npc_word, correct_translation, incorrect_translation = conversation
        display_conversation_box(npc_word, correct_translation, incorrect_translation)
    else:
        display_conversation_box()  # Render an empty box

    pygame.display.flip()
    clock.tick(FPS)

pygame.quit()
print("Game exited.")
