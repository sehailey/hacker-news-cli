git filter-branch -f --env-filter 'if [ "$GIT_AUTHOR_EMAIL" = "notnull@serge" ]; then
     GIT_AUTHOR_EMAIL=sarah.elizabeth.hailey@gmail.com;
     GIT_AUTHOR_NAME="Sarah Hailey";
     GIT_COMMITTER_EMAIL=$GIT_AUTHOR_EMAIL;
     GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME"; fi' -- --all
