import time
import psycopg2
import redis

# PostgreSQL Connection (Persistent)
pg_conn = psycopg2.connect(
    dbname="testdb",
    user="postgres",
    password="Ananya123#",  # Update if you set a password
    host="localhost",
    port="5432"
)
pg_cursor = pg_conn.cursor()

# Redis Connection (Persistent)
redis_client = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)

# Run multiple times to avoid cold start issues
for _ in range(5):
    # Measure PostgreSQL Fetch Time
    start_pg = time.time()
    pg_cursor.execute("SELECT * FROM users WHERE id = %s;", (1,))
    pg_result = pg_cursor.fetchone()
    end_pg = time.time()
    pg_time = end_pg - start_pg

    # Measure Redis Fetch Time
    start_redis = time.time()
    redis_result = redis_client.get("user:1")  # No json.loads() overhead
    end_redis = time.time()
    redis_time = end_redis - start_redis

    print(f"PostgreSQL Fetch Time: {pg_time:.6f} seconds, Data: {pg_result}")
    print(f"Redis Fetch Time: {redis_time:.6f} seconds, Data: {redis_result}")

# Cleanup
pg_cursor.close()
pg_conn.close()
redis_client.close()
