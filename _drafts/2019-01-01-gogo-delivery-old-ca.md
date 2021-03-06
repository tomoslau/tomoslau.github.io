---
layout: post
published: false
title: Gogo Delivery order experience
date: 2019-07-14 00:00:00 +0800
categories:
year: 2018-2019
role: Product designer
type: Mobile app
appstore-link: https://apps.apple.com/hk/app/gogovan-your-delivery-app/id708390467?l=en
googleplay-link: https://play.google.com/store/apps/details?id=hk.gogovan.gogoVanClient2&hl=en
description: 
banner-image: "/assets/ggd-order-banner.jpg"
thumbnail: "/assets/ggd-order.jpg"
permalink: /gogo-delivery-order-experience/
---

GogoX (formerly GogoVan) launched a new crowd-sourced same-day delivery service in 2018 summer. Originally, the service targetted small-medium businesses with ad-hoc delivery needs in Hong Kong. I was part of an ambitious project to find the product-market fit for Gogo Delivery.

## My role

I led the design for the Delivery experience and collaborated with one designer on the business features and two other designers to support delivery on the mobile app. I worked closely with our product manager, data analyst and engineers to discover and validate the problems.

## Research

I conducted continuous discovery through regular user interviews, surveys and working closely with the customer service, operations and sales team. 

During the first week of launch, we noticed a high cancellation rate, where 80% of cancellations were due to shippers placing orders with oversized, overweight or multiple packages.

We also learned that e-commerce and retail merchants preferred to consolidate orders and place them all at once.


## Reducing order cancellations

We found that new shippers assumed our couriers deliver packages using vans, but in reality, our couriers are walkers (they travel on foot and public transport). This led to oversized, overweight or multiple packages that were physically impossible for a courier to carry.

I tested the existing app with people unfamiliar with our service to dig deeper to the reasons why: most of them assumed packages were delivered by vans due to our brand “GogoVAN” prior to the rebranding to "GogoX" and that the order flow didn’t give them any idea of our courier’s mode of transport.

To tackle this problem, we ran a design sprint to come up with ideas and decide on what to test in our order flow prototype.

<figure><div  class="ratio-4x3"><img class="lazy" data-src="/assets/ggv-oversize-sketches.jpg" alt="Sketches and voting stickers to explore and decide which ideas to test in our prototype"></div><figcaption>Sketches and voting stickers to explore and decide which ideas to test in our prototype</figcaption></figure>
<figure>
	<div class="ratio-16x9">
		<img class="lazy" data-src="/assets/ggd-oversize-service-tabs.png" alt="New service copy and icon to improve clarity">
	</div>
	<figcaption>In the prototype, we renamed the service to "Courier Delivery" (搵速遞員) and redesigned the service icon to show a walker/biker to improve the clarity of the service on the home page.</figcaption>
</figure>
<figure>
	<div class="ratio-4x3">
		<img class="lazy" data-src="/assets/ggd-oversize-order-details.png" alt="Prototype to test service clarity">
	</div>
	<figcaption>
		We also tested these ideas:<br>
	1. Package type options to show what kind of packages are acceptable for couriers to deliver <br> 2. Helper text with a link to direct oversized delivery needs to our van service<br>3. An option for oversized packages that direct to our van service</figcaption>
</figure>

After testing the prototype with users unfamiliar with our delivery service, we found that all testers understood the service and the majority expected either a walker or biker to pick up their package. When given a task to deliver larger items, they successfully switched to the van booking service.

### The outcome

Due to scope vs outcome, we decided to implement the new service icon, helper text, oversize/overweight options and not add package type options to the order form. 

One month after the release, cancellations due to oversized items by new shippers reduced by 37%. Overall cancellation rate dropped 17%.

## Scheduled delivery and cut-off times

Through interviews with e-commerce and brick and mortar store visits, we learned that shippers like to consolidate orders and place them all at once at the same time. Some shippers preferred placing multiple orders in the evening for the next day without worrying about it the next morning due to cutoff times. Many shippers also found it difficult to understand the cut-off time for each drop-off option.

### Process & experience

To improve the clarity of drop-off times, we worked closely with operations and marketing team to adjust the drop-off and cut-off times that is more meaningful for both shippers and couriers.

We made the times easier to understand and more memorable by:
- Simplifying the same-day drop-off options to office-hours and after office-hours for residential deliveries
- Displaying all drop-off options even when they’re not available (in a disabled state)
- Adding helper text to make the cut-off times more transparent
- Rounding times to the closest hour
<figure>
	<div style="background-color:#F1F5F8;padding: 2rem">
		<video class="lazy" autoplay loop style="max-width:372px;margin:0 auto">
			<source src="/assets/ggd-do-time-prototype.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>An early web prototype I created to test the clarity of drop-off options and cut-off times</figcaption>
</figure>

We tested the prototype with users and they found the helper text most useful in understanding the options. However, some users found the “available if…” helper text on available options confusing, so we decided to only show it when the option is disabled.

<figure>
	<div class="ratio-4x3">
		<img class="lazy" data-src="/assets/ggd-scheduling.png" alt="1. Added package type options to show what kind of packages are acceptable for couriers to deliver. 2. Helper text with a link to direct oversized delivery needs to our van service. 3. An option for oversized packages that direct to our van service.">
	</div>
	<figcaption>1. Simplified the pick-up time selection for clarity<br>
	2. Showing unavailable drop-off options in a disabled state with helper text to remind shippers of the cut-off times<br>
	3. Date picker for scheduling deliveries up to six days in advance</figcaption>
</figure>

### The outcome
After shipping the scheduling feature, the percentage of scheduled orders increased by 270%. Scheduled orders make 20–30% of our daily orders.

## Cash payment

Following up with feedback from sales and business development teams, we learned that some merchants didn’t have access to a company credit card and didn’t feel comfortable using a personal credit card to pay for deliveries. They were accustomed to paying by cash or monthly settlements for deliveries, and in some cases they preferred their customers to pay the couriers directly.


<figure>
	<div class="ratio-4x3">
		<img class="lazy" data-src="/assets/ggd-payment-method-flow.jpg" alt="Payment method flow">
	</div>
</figure>
<figure>
	<div class="ratio-4x3">
		<video class="lazy" autoplay loop>
			<source src="/assets/ggd-payment-cash.mp4" type="video/mp4">
		</video>
	</div>
</figure>

To reduce friction for users who may not have access to credit cards, we added payment options for cash paid by sender or recipient. The payment method will persist so the next time the user places an order, the previously used payment method will be used.

To support cash payment for couriers, we added cash icons on the order list page and prominent copy on the pick-up and drop-off flow to remind them to take cash. We also redesigned the courier earning page so they can see their earnings breakdown.

## Lessons learned

### Test product onboarding with new users unfamiliar with the service

The problem of shippers not understanding our service wasn’t identified during the closed beta period prior to launch because our sales team onboarded each user so they had a good understanding of the service. When new customers started using the service, the problems started to show up. 

### Listen to users and teammates who communicate frequently with clients on a regular basis.

Conducting frequent user interviews and sync-ups with our operations / customer service team gave us valuable insight into the problems we should prioritize and tackle. 

### Test designs and get feedback early

Testing early gave us a more concrete direction and prevent tunnel vision. It also helped cross-functional teams understand the product roadmap and priorities. There were many times our hypotheses were proven wrong and saved us time.