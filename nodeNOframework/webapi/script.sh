echo '\n\n requesting all heroes'
curl localhost:3000/heroes

echo '\n\n requesting Xuxa da Silva'
curl localhost:3000/heroes/1

echo '\n\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{ "invalid": "data" }' \
    localhost:3000/heroes

echo '\n\n creating Superman'
CREATE=$(curl --silent -X POST \
    --data-binary '{ "name": "Superman", "age": 35, "power": "Strength" }' \
    localhost:3000/heroes)

echo $CREATE

ID=$(echo $CREATE | jq .id)

echo '\n\n requesting Superman'
curl localhost:3000/heroes/$ID
