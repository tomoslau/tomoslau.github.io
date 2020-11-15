---
layout: post
company: HYPEBEAST
title:  Feed personalization
date: 2017-10-01 00:00:00 +0800
categories:
year: 2017
role: UX / UI Design
type: Mobile app
appstore-link: https://itunes.apple.com/us/app/hypebeast/id986768161?mt=8
googleplay-link: https://play.google.com/store/apps/details?id=com.hypebeast.editorial&hl=en
summary:
banner-image: "/assets/hb-banner.jpg"
thumbnail: "/assets/hb.jpg"
---

During my job interview at HYPEBEAST, I was asked a question: “If you were to improve one thing on HYPEBEAST, what would it be?”

As a moderate sneakerhead, I often went on HYPEBEAST to read about the latest and upcoming sneaker releases. I rarely browsed the home feed because the “Latest” feed was full of content from other categories that I wasn’t as interested about. I found myself always tapping on “Footwear” on the navigation bar. On mobile, this was two additional taps. So I told my interviewer that I would love HYPEBEAST to show more relevant content to readers.

This became one of the first projects I got to work on after joining HYPEBEAST in early 2017.

## Validating the problem

We started by talking about the problem internally and found out a majority of us had the same problem. We also learned that although our readers have similar interests in streetwear (mainly fashion and footwear), they also have different interests in other news categories like art, design, and automotive. We wanted to make it easier for readers to view content that they want to read.

## Testing solutions

The most straightforward solution we had was to create a filter that is saved to the reader’s profile. News aggregators, like Feedly, Flipboard, and Apple News are great at doing this. Readers are shown stories based on topics and news sources they follow.

![img](https://cdn-images-1.medium.com/max/2000/1*NWE17Q7StqRmkhM42v8KCw.jpeg)

Another solution is to use an algorithm to show users stories based on their engagement, like how Google News suggests stories based on users’ search activity. 

We decided to go ahead with allowing users to pick their interests so that users have more control over what they see, as well as fitting within the project timeline constraints.

## Limitations / Project constraints

- The feature is to be rolled out on iOS and Android apps first, since there are more loyal readers there compared to the web, where traffic is predominantly coming from social media.
- The latest feed remains as the default landing feed to always show pinned feature and sale posts at the top.
- Personalization supports all five languages — now six (with different categories per language.)

## Reducing friction

The app personalization is linked to the user’s account instead of storing locally so that it’s synced across devices (and on web in the future), just like the existing bookmarks feature. Ideally this feature could be synced, but also available to non-registered users. However, due to technical constraints and marketing incentives, we decided to make it available for registered users only.

To cater our multilingual readers, we linked categories across different languages so they don’t have to set up their preferences again when they switch to a new language.

![img](https://cdn-images-1.medium.com/max/1600/1*WbFoot4UTue8jbgq2JY3sQ.gif)

*An early prototype I created in Origami.*

We ask new readers to pick their interests right after sign up. Returning readers and those who skip sign up see an empty state with a call to action when they tap on “Your Feed” tab. This way, users know about the feature, but also have the option to browse without signing up or personalizing their feed.

![img](https://cdn-images-1.medium.com/max/2000/1*W-WNAWaa9A-zvJP9hRfcZA.png)

Although images add a visual impact to the design, it’s unrealistic because they have to be updated frequently, as "hype" products go out of trend very quickly. Displaying the list of categories inline allowed the flexibility for different languages to fill up the modal from the bottom without creating excessive vertical space and hindering reachability.

## Extendability

The feed is the first step of user personalization. We also looked at rolling out personalized notifications with the same categories selected for the feed, along with a tailored newsletter experience.

We designed the onboarding flow with personalized notifications in mind. By adding a notification prompt right after the reader chooses their topics, it becomes more relevant and meaningful. Previously, the prompt was triggered based on a number of page views.

However, after creating a prototype and testing it with users, I realized I was wrong to assume that people wanted to receive notifications based on the same topics they chose for their feed. Some users wanted to receive more specific notifications, and some wanted a wider set of notifications.

Based on the feedback, we created options that allow users to select different topics for notifications. We suggested categorizing notifications by *Breaking News*, which is pushed less frequently but includes all categories, and *Your Topics*. The unlinked option allows more customization, but adds additional steps to the onboarding flow.

## What we learned

As of October 2017 (four months since launch), there are 31,002 subscribers out of 150,527 monthly active users.

1. 96% of users are subscribed to Fashion, and 95% Footwear. 63% Music.
2. A majority of users subscribe to two categories, with the number falling off as the number of categories increase.
3. Subscribers view Your Feed once every three days on average.

![img](https://cdn-images-1.medium.com/max/1600/1*isVJbFBPdDvVQ58no0cXpA.jpeg)

Due to the amount of Fashion and Footwear content published compared to other categories, users subscribed to both Fashion and Footwear end up having similar feeds between Latest (landing feed) and Your Feed. To make the feed more relevant and personal to each user, we redefined Your Feed as “popular stories about things you care about that you haven’t seen yet.”

## What’s next

- We recently modified the feed by only showing posts above a certain level of “hype” — a metric we rolled out on website from views and engagement.
- Test and build a “seen” feature, so that stories that have been read or seen by the user won’t be shown again on the feed. This will allow us to test a wider range of sorting, since the latest posts won’t always have to be at the top for the feed to appear fresh.
- Test algorithms where posts are shown based on the user’s browsing history, hype, time published. For example, a user who reads a lot about Off-White will see more stories about Off-White in their feed. This also reduces friction by allowing us to remove the Choose Your Topics flow, and Your Feed will be accessible to everyone immediately, hopefully reducing drop-off and allowing our non registered users to view Your Feed.