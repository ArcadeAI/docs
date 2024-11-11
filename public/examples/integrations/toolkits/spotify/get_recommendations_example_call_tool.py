from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "Spotify.GetRecommendations"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.authorization_url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

inputs = {
    "seed_artists": [
        "123",
        "987",
    ],  # You can get artist IDs from other tools such as GetArtistByName
    "seed_genres": ["123", "987"],
    "seed_tracks": [
        "456"
    ],  # You can get track IDs from other tools such as GetCurrentlyPlaying
    "limit": 10,
    "target_acousticness": 0.2,
    "target_danceability": 0.2,
    "target_duration_ms": 180000,
    "target_energy": 0.9,
    "target_instrumentalness": 0.9,
    "target_key": 9,
    "target_liveness": 0.85,
    "target_loudness": 65,
    "target_mode": 1,
    "target_popularity": 99,
    "target_speechiness": 0.4,
    "target_tempo": 160,
    "target_time_signature": 4,
    "target_valence": 0.9,
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
