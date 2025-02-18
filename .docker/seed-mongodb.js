// Insert seed data
db.requests.insertMany([
  {
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    status: "suggestion",
    description: "Easier to search for solutions based on a specific stack.",
    comments: [
      {
        content:
          "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        user: {
          image: "./assets/user-images/image-suzanne.jpg",
          name: "Suzanne Chang",
          username: "upbeat1811",
        },
      },
      {
        content:
          "Please use fun, color-coded labels to easily identify them at a glance",
        user: {
          image: "./assets/user-images/image-thomas.jpg",
          name: "Thomas Hood",
          username: "brawnybrave",
        },
      },
    ],
  },
  {
    title: "Add a dark theme option",
    category: "feature",
    upvotes: 99,
    status: "suggestion",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    comments: [
      {
        content:
          "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
        user: {
          image: "./assets/user-images/image-elijah.jpg",
          name: "Elijah Moss",
          username: "hexagon.bestagon",
        },
      },
      {
        content:
          "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
        user: {
          image: "./assets/user-images/image-james.jpg",
          name: "James Skinner",
          username: "hummingbird1",
        },
        replies: [
          {
            content:
              "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
            replyingTo: "hummingbird1",
            user: {
              image: "./assets/user-images/image-anne.jpg",
              name: "Anne Valentine",
              username: "annev1990",
            },
          },
          {
            content:
              "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
            replyingTo: "annev1990",
            user: {
              image: "./assets/user-images/image-ryan.jpg",
              name: "Ryan Welles",
              username: "voyager.344",
            },
          },
        ],
      },
    ],
  },
  {
    title: "Q&A within the challenge hubs",
    category: "feature",
    upvotes: 65,
    status: "suggestion",
    description: "Challenge-specific Q&A would make for easy reference.",
    comments: [
      {
        content:
          "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
        user: {
          image: "./assets/user-images/image-george.jpg",
          name: "George Partridge",
          username: "soccerviewer8",
        },
      },
    ],
  },
  {
    title: "Add image/video upload to feedback",
    category: "enhancement",
    upvotes: 51,
    status: "suggestion",
    description: "Images and screencasts can enhance comments on solutions.",
    comments: [
      {
        content:
          "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
        user: {
          image: "./assets/user-images/image-javier.jpg",
          name: "Javier Pollard",
          username: "warlikeduke",
        },
      },
      {
        content:
          "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
        user: {
          image: "./assets/user-images/image-roxanne.jpg",
          name: "Roxanne Travis",
          username: "peppersprime32",
        },
      },
    ],
  },
  {
    title: "Ability to follow others",
    category: "feature",
    upvotes: 42,
    status: "suggestion",
    description: "Stay updated on comments and solutions other people post.",
    comments: [
      {
        content:
          "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
        user: {
          image: "./assets/user-images/image-victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin",
        },
        replies: [
          {
            content:
              "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
            replyingTo: "arlen_the_marlin",
            user: {
              image: "./assets/user-images/image-zena.jpg",
              name: "Zena Kelley",
              username: "velvetround",
            },
          },
        ],
      },
      {
        content:
          "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
        user: {
          image: "./assets/user-images/image-jackson.jpg",
          name: "Jackson Barker",
          username: "countryspirit",
        },
      },
    ],
  },
  {
    title: "Preview images not loading",
    category: "bug",
    upvotes: 3,
    status: "suggestion",
    description:
      "Challenge preview images are missing when you apply a filter.",
  },
  {
    title: "More comprehensive reports",
    category: "feature",
    upvotes: 123,
    status: "planned",
    description:
      "It would be great to see a more detailed breakdown of solutions.",
    comments: [
      {
        content:
          "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
        user: {
          image: "./assets/user-images/image-victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin",
        },
      },
      {
        content:
          "Yeah, this would be really good. I'd love to see deeper insights into my code!",
        user: {
          image: "./assets/user-images/image-jackson.jpg",
          name: "Jackson Barker",
          username: "countryspirit",
        },
      },
    ],
  },
  {
    title: "Learning paths",
    category: "feature",
    upvotes: 28,
    status: "planned",
    description:
      "Sequenced projects for different goals to help people improve.",
    comments: [
      {
        content:
          "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
        user: {
          image: "./assets/user-images/image-george.jpg",
          name: "George Partridge",
          username: "soccerviewer8",
        },
      },
    ],
  },
  {
    title: "One-click portfolio generation",
    category: "feature",
    upvotes: 62,
    status: "in-progress",
    description:
      "Add ability to create professional looking portfolio from profile.",
    comments: [
      {
        content:
          "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
        user: {
          image: "./assets/user-images/image-ryan.jpg",
          name: "Ryan Welles",
          username: "voyager.344",
        },
      },
    ],
  },
  {
    title: "Bookmark challenges",
    category: "feature",
    upvotes: 31,
    status: "in-progress",
    description: "Be able to bookmark challenges to take later on.",
    comments: [
      {
        content:
          "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
        user: {
          image: "./assets/user-images/image-suzanne.jpg",
          name: "Suzanne Chang",
          username: "upbeat1811",
        },
      },
    ],
  },
  {
    title: "Animated solution screenshots",
    category: "bug",
    upvotes: 9,
    status: "in-progress",
    description:
      "Screenshots of solutions with animations don’t display correctly.",
  },
  {
    title: "Add micro-interactions",
    category: "enhancement",
    upvotes: 71,
    status: "live",
    description: "Small animations at specific points can add delight.",
    comments: [
      {
        content:
          "I'd love to see this! It always makes me so happy to see little details like these on websites.",
        user: {
          image: "./assets/user-images/image-victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin",
        },
        replies: [
          {
            content:
              "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
            replyingTo: "arlen_the_marlin",
            user: {
              image: "./assets/user-images/image-suzanne.jpg",
              name: "Suzanne Chang",
              username: "upbeat1811",
            },
          },
        ],
      },
    ],
  },
]);

// Extract users into a separate collection
db.requests.aggregate([
  { $unwind: "$comments" },
  { $replaceWith: "$comments.user" },
  {
    $unionWith: {
      coll: "requests",
      pipeline: [
        { $unwind: "$comments" },
        { $unwind: "$comments.replies" },
        { $replaceWith: "$comments.replies.user" },
      ],
    },
  },
  {
    $group: {
      _id: "$username",
      username: { $first: "$username" },
      name: { $first: "$name" },
      avatar: { $first: "$image" },
    },
  },
  { $unset: "_id" },
  // Set user passwords to "supersecret"
  {
    $set: {
      password: {
        $literal:
          "$2a$10$TIH4Q1KJedCRjLc33yVojeINFM8CdyuIF/b5IkMIlWFxoAP.WOJIu",
      },
    },
  },
  { $merge: "users" },
]);

// Create a unique index on the `username` field of the `users` collection
db.users.createIndex({ username: 1 }, { unique: true });

// Extract comments into a separate collection
db.requests.aggregate([
  { $unwind: "$comments" },
  {
    $lookup: {
      from: "users",
      localField: "comments.user.username",
      foreignField: "username",
      as: "user",
    },
  },
  { $unwind: "$user" },
  {
    $project: {
      requestId: "$_id",
      userId: "$user._id",
      _id: 0,
      content: "$comments.content",
      replies: "$comments.replies",
    },
  },
  { $merge: "comments" },
]);

// Move nested replies to the comments collection
db.comments.aggregate([
  { $match: { replies: { $ne: null } } },
  { $unwind: "$replies" },
  {
    $lookup: {
      from: "users",
      localField: "replies.user.username",
      foreignField: "username",
      as: "user",
    },
  },
  { $unwind: "$user" },
  {
    $project: {
      _id: 0,
      content: "$replies.content",
      replyingTo: "$replies.replyingTo",
      userId: "$user._id",
      requestId: "$requestId",
      parentId: "$_id",
    },
  },
  { $merge: "comments" },
]);

// Convert embedded replies to comment references
db.comments.aggregate([
  { $match: { replies: { $ne: null } } },
  {
    $lookup: {
      from: "comments",
      localField: "replies.content",
      foreignField: "content",
      as: "replies",
    },
  },
  { $set: { replies: { $map: { input: "$replies", in: "$$this._id" } } } },
  { $merge: "comments" },
]);

// Compute the total number of comments for each request
db.requests.aggregate([
  { $match: { comments: { $ne: null } } },
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "requestId",
      as: "comments",
      /*
      pipeline: [
        { $match: { parentId: null } },
        { $limit: 3 },
        {
          $lookup: {
            from: "comments",
            localField: "replies",
            foreignField: "_id",
            as: "replies",
            pipeline: [
              { $limit: 3 },
              {
                $lookup: {
                  from: "users",
                  localField: "userId",
                  foreignField: "_id",
                  as: "user",
                  pipeline: [{ $unset: ["_id"] }],
                },
              },
              { $unwind: "$user" },
              { $unset: ["requestId", "parentId", "userId"] },
            ],
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
            pipeline: [{ $unset: "_id" }],
          },
        },
        { $unwind: "$user" },
        {
          $project: {
            content: 1,
            user: 1,
            replies: {
              $cond: {
                if: { $eq: [0, { $size: "$replies" }] },
                then: "$$REMOVE",
                else: "$replies",
              },
            },
          },
        },
      ],
      */
    },
  },
  { $set: { totalComments: { $size: "$comments" } } },
  { $unset: "comments" },
  { $merge: { into: "requests", whenMatched: "replace" } },
]);
