---
layout: post
title: GogoX Delivery mobile order experience
date: 2020-09-24 00:00:00 +0800
categories:
year: 2020
role: "Senior Product Designer"
type: Mobile
appstore-link:
googleplay-link:
description: 
banner-image: "/assets/ggd-mobile-banner.png"
thumbnail: "/assets/ggd-mobile-thumbnail.png"
permalink: /gogo-delivery-mobile/
---

## Overview

GogoX is Hong Kong's largest on-demand logistics platform (think Uber for logistics) and operates in Taiwan, Singapore, India, Vietnam, and South Korea. In 2018, GogoX launched a new service to tackle same-day last-mile delivery.

Our goal was to increase delivery demand while maintaining a high completion rate on the supply side. In this case study, we'll focus on the activation and retention on the demand side.

## Role

Senior Product Designer: User research, interaction, visual design, prototyping, testing, design QA

## Problem

GogoX’s client app went through a revamp in late 2019. Due to constraints, components and flows were shared across both vehicle hiring and delivery services. After launching the new app, we decided to tackle the conversion in the place order flow to increase activation.

Based on the order funnel data and user interviews, we discovered opportunities to improve the conversion for entering sender and recipient and package information.

<figure>
	<div style="background-color:#F1F1F1;padding: 2rem">
		<video class="lazy" style="max-width:320px;margin:0 auto" controls>
			<source src="/assets/ggd-mobile-place-order-before.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>Video of the old Delivery place order flow</figcaption>
</figure>

## Research

Based on surveys I conducted and calls by the customer service team, we found the most frequently mentioned pain points were the completion rate and the amount of information to fill in on the order form.

To dig deeper into their pain points, I conducted qualitative user interviews.

“It feels like there are a lot of steps to enter the sender and recipient information. It’s also difficult to edit the address.”

“There’s a lot of input compared to other delivery services. For example, other services have a fixed rate and I don’t have to enter the package information like size and weight every time.”

“Sometimes I find it difficult to find an address. I usually copy and paste my customer’s address, but sometimes there are no search results.”

## Competitive analysis

<figure><div><img class="lazy" data-src="/assets/ggd-mobile-competitor-analysis.png" alt="Competitor analysis"></div></figure>

When we placed our order flow next to our competitors' and other on-demand delivery services', it's apparent there are more steps in our flow, especially in the sender/recipient details and package information steps.

## Brainstorm

<figure><div><img class="lazy" data-src="/assets/ggd-mobile-brainstorm.png" alt="Brainstorm"></div></figure>

I shared the research and facilitated a brainstorm session with our cross-functional team to tackle the two steps of the funnel. Then, I took our favorite ideas and prototyped them to test with ad-hoc users and merchants.

## Simplified the sender/recipient form

<figure>
	<div style="background-color:#F1F1F1;padding: 2rem">
		<video class="lazy" style="max-width:320px;margin:0 auto" controls>
			<source src="/assets/ggd-mobile-from-to-form-prototype.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>Prototype exploring the idea of a single page form</figcaption>
</figure>

<figure>
	<div style="background-color:#F1F1F1;padding: 2rem">
		<video class="lazy" style="max-width:320px;margin:0 auto" controls>
			<source src="/assets/ggd-mobile-from-to-late-prototype.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>Prototype of new sender/recipient details and address input flow</figcaption>
</figure>

<figure><div><img class="lazy" data-src="/assets/ggd-from-to-before.png" alt="From and to before"></div></figure>

<figure><div><img class="lazy" data-src="/assets/ggd-from-to-after.png" alt="From and to after"></div></figure>

Based on usability tests, we found that the design that shows all the details for sender/recipient in a single page provided the most clarity to merchants. It allowed merchants to review their input and edit any field easier. The new form also prefilled the sender’s address using the device’s location as this was the most frequent use case based on data and interviews. The address details, sender name and phone number are also filled if there’s available information from their account details or a previous order.

## Select on map

<figure><div><img class="lazy" data-src="/assets/ggd-select-on-map.png" alt="Select on map shipped"></div><figcaption>What we shipped for the first scope</figcaption></figure>

<figure><div><img class="lazy" data-src="/assets/ggd-select-on-map-alt.png" alt="Select on map alt"></div><figcaption>Exploration on an idea suggested by our engineer Jay to suggest nearby addresses</figcaption></figure>

During usability tests, we found that the GPS location taken to prefill the sender's address isn’t always accurate, especially in dense cities. To tackle this issue, we shipped a select on map feature to allow merchants to drag their location on the map to refine their pickup or dropoff location.

## Package information

<figure>
	<div style="background-color:#F1F1F1;padding: 2rem">
		<video class="lazy" style="max-width:320px;margin:0 auto" controls>
			<source src="/assets/ggd-mobile-package-info-prototype-1.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>Prototype of linking size and weight to package types based on historical data</figcaption>
</figure>

<figure>
	<div style="background-color:#F1F1F1;padding: 2rem">
		<video class="lazy" style="max-width:320px;margin:0 auto" controls>
			<source src="/assets/ggd-mobile-package-info-prototype-2.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>Prototype of the Business flow with custom size and weight input (unlinked from package type)</figcaption>
</figure>

<figure><div><img class="lazy" data-src="/assets/ggd-package-info-before.png" alt="Package info before"></div></figure>

<figure><div><img class="lazy" data-src="/assets/ggd-package-info-after.png" alt="Package info after"></div>
<figcaption>What we shipped for Personal and Business users</figcaption></figure>

<figure><div><img class="lazy" data-src="/assets/ggd-package-info-autofill.png" alt="Package info autofill"></div><figcaption>We also shipped autofill using merchants' previously entered package information</figcaption></figure>

The package information page was the second highest dropoff point for new and ad-hoc users. Through user interviews, we learned that most ad-hoc users felt the package information took long to fill in. Most of them expected to be able to send a package as long as it fit under a size that fits in a motorbike or sedan, and found it unnecessary to fill in the details. Merchants, though, didn't mind filling in the details like package size and weight because they are extremly price sensitive. In fact, many merchants we spoke with felt our box model options (i.e. within a 40x40x40cm cube) were too restrictive when they wanted to send flatter and longer packages. 

We decided to create a different package information form for new/ad-hoc users, and merchants based on their needs:

For ad-hoc users, we simplified the 20 possible size and weight combinations to two options (40x40x40cm, 10kg, and 60x60x60cm, 20kg) based on the size and weight relationship from historical orders and competitive advantages. I conducted interviews and comparative usability tests to validate laypeople's mental model on communicating size and weight of packages. I found that the existing box model (i.e. 40x40x40cm) is easier to understand than using combined dimensions or volumetric weight (common in logistics industry) and most people guess the size and weight instead of measuring with tools.

For the merchant's flow, we added separate input fields for length, width, and height to give businesses the flexibility to send long and narrow packages at a fairer price. 

In both flows, we introduced package info defaults for new users, and reused previous order information for returning users. We also added a saved package feature, where merchants can autofill the package information page.



## Outcome

- 28% users selected a pickup or dropoff on the map
- Address confirmed increased by 125%
- The conversion between starting an order and completing the sender/recipient details increased by 8%
- Time spent on package info page reduced by 14% (after autofill rollout and before new package info flow)



## Learnings

A couple of months after rolling out the sender/recipient flow, our operations team received an increase in courier complaints regarding the accuracy of pickup addresses. Our assumption is that by prefilling the pickup location using the device's GPS, some users may not be aware they should change it when the address is wrong. This resulted in couriers going to the wrong location and spending more time communicating with clients. A good problem to solve given the impact of the solutions.