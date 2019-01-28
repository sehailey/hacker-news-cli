Hacker News Clone - CLI Version
===============================

README
------

The MVP of this project is a clone of <https://news.ycombinator.com> but
in CLI. A user should be able to log in from the command line and be
presented with a list of stories, along with a 'menu bar' that has the
options in HN: news, comments, ask, show, jobs, submit (we will likely
not use all of these options, but let's keep it as a clone for now).

TODOs
-----

notes
-----

### features

1.  voting

    1.  registration

        required to comment (?)

    2.  search

        by popularity, date. I find it effective.

    3.  threaded collapsible comments

        -   All threads threaded and collapsible. maxed by default. each
            can be minimized individually, collapsing all
            contained comments.
        -   main threads sorted by quality, replies chronological (?),
        -   poor quality comments remain visible but dimmed according to
            how downvoted

    4.  user karma

        -   users have karma
        -   user post/comment history can be seen by clicking on
            their profile.

    5.  voting

        regiistration required min karma required for downvoting
        (comments only?)

    6.  sort algorithms (see note below)

        -   posts sorted by ratio of upvotes / newness / user karma /
            voodoo

    7.  user control of search / sort options

        -   users can view HN sorted view, chrono posts, chrono
            comments, (?)

    8.  'dead' (shadowbanned) profiles

        These are profiles where the user doesn't know they are
        'shadowbanned', so they continue to post but can't tell that no
        one else can see it.

        -   [explicit
            rules](https://news.ycombinator.com/newsguidelines.html) and
            culture to encourage / discourage certain content

### User Stories

1.  MVP

    -   landing page has a list of articles
    -   submit a story by pasting a link

2.  logging in


