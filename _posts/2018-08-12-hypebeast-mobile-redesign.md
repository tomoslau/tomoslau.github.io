---
layout: post
title: HYPEBEAST
date: 2018-08-12 00:00:00 +0800
categories:
year: 2017-2018
role: UX / UI design
type: Mobile app
appstore-link: https://itunes.apple.com/us/app/hypebeast/id986768161?mt=8
googleplay-link: https://play.google.com/store/apps/details?id=com.hypebeast.editorial&hl=en
description: Improving reading experience on mobile
banner-image: "/assets/hb-banner.jpg"
thumbnail: "/assets/hb.jpg"
permalink: /hypebeast-mobile-redesign/
---

[HYPEBEAST](http://hypebeast.com) is a media platform for youth culture to get the latest news in streetwear, sneakers, fashion, entertainment and music. Our readers get their dose of hype through social media, website, and app. Of these channels, our most loyal readers use the app. In turn, readers who download the app have increased retention.

Our goal was to increase our loyal readership by improving the mobile app reading experience and marketing. During 2017 and 2018, I redesigned HYPEBEAST’s mobile apps to foster a better reading experience. Below are a few changes we shipped.

## Creating a more familiar experience for both platforms

When I joined the team, HYPEBEAST’s Android app was designed and developed to mimic the iOS counterpart. The prioritization to design for iOS only was due to the 80% iOS and 20% Android monthly active users split. 

This created an **unfamiliar interactive and visual experience** for our Android readers, as well as a **reduction in app performance** due to custom components and animations based on iOS. Furthermore, Google Play refused to feature our app due to several usability and visual issues addressed in the Material Design guidelines.

<figure><img class="lazy" data-src="/assets/hb-material.jpg" alt="Application of Material Design patterns to the Android app"></figure>

To make our app less confusing for our app readers, **we utilized patterns shared by both iOS and Android platforms, while conforming to Human Interface Guidelines and Material Design specs.** We applied Jakob’s law by ensuring our app works the the same way as all the other apps they use. For example, both apps share a bottom tab bar as the primary navigation, but details such as the bar height, shadow “elevation”, and transitions differed.

**We used native components and system icons wherever possible.** By removing custom components and animations, such as the app bar and iOS-style “back” transition, the Android app felt more snappy and familiar according to our testers. This resulted in a <400ms (Doherty Threshold) interaction feedback on lower end devices.

## Improving readability and focus

We received feedback from our readers and internally that our app looks dated. This is apparent when compared to our competitors and other apps. Instead of simply following the minimalism trend, we decided to take this opportunity to improve readability and focus as a whole.

<figure><img class="lazy" data-src="/assets/hb-home.jpg" alt="News feed: before and after"></figure>

**We avoided long headlines on images** for articles where editors and designers don’t have control over placement and styling. Previously, the gradient overlays made images too dark, covered parts of images, and sometimes created undesirable visuals. The revised design allows both headline and image to be clear, and also uses the same assets across mobile, tablet and desktop designs to simplify editors’ workflow.

<figure><img class="lazy" data-src="/assets/hb-style.jpg" alt="Visual styling revisited"></figure>
<figure><img class="lazy" data-src="/assets/hb-components.jpg" alt="App components"></figure>

We revisited the typography to **create a stronger hierarchy**. Readers can identify important news and sponsored posts based on prominence. We reduced the complexity of icons to make them more recognizable. We also implemented new color guidelines to improve contrast and meet WCAG guidelines, and a soft 8-point grid to create vertical rhythm, consistent spacing and increased proximity. 

## More natural and familiar gesture controls

In usability tests, we noticed readers trying to use certain gesture controls, but the app failed to do their desired action. Some gestures are not native to the platform but are so common in popular apps that readers expect them to work.

<figure>
<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/1d6cTwAg_cM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
</figure>


For example, we learned that many iOS readers didn’t know that tapping on the status bar scrolls to top. Instead, they tried to scroll to top by tapping on the bottom bar again. We added this gesture control to both platforms. We also made sure all the tabs were swipeable, and image galleries can be closed based on vertical gestures (flicking away). 

Our readers love reading article comments. However, navigating from comments back to the article was difficult on iOS. Due to the limitations with Disqus, we loaded the comments on a separate page. Previously, this was presented as a full page modal, with a close button on the top bar away from the thumb zone. Android readers didn’t have this problem because it could be closed by tapping the back button. To make it easier to navigate, we changed the comments page so it pushed in from the right, and added the familiar swipe back gesture.

Since shipping these updates, our app reviews improved, and the app was featured on Google Play and the App Store. In 2017, we grew from 32k to 73k monthly active users.