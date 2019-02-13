#!/usr/bin/env bash
# read user input: http://mywiki.wooledge.org/BashFAQ/078
URL='http://localhost:1337/api/comments'

read -p "title: " title
read -p "content: " content
DATA="{\"title\": \"$title\", \"content\": \"$content\"}"

echo "Posting $DATA to $URL"
curl -H "Content-Type: application/json" -X POST -d "$DATA" "$URL"

exit 0

#http://goinbigdata.com/using-curl-for-ad-hoc-testing-of-restful-microservices/

#https://stackoverflow.com/questions/7172784/how-to-post-json-data-with-curl-from-terminal-commandline-to-test-spring-rest
