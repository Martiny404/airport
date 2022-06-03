create TABLE posts(
  id SERIAL PRIMARY KEY,
  equipment VARCHAR(255),
  category VARCHAR(255),
  reason VARCHAR(255),
  measures_taken VARCHAR(255),
  FIO VARCHAR(255),
  note VARCHAR(255),
  date VARCHAR(255),
  time_create bigint NOT NULL
);

create TABLE post(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(255),
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (id)
);

SELECT * FROM person
ORDER BY time_create DESC;