---
layout: post
company: GogoX
title: Helping couriers find more relevant delivery orders
date: 2019-07-14 00:00:00 +0800
categories:
year: 2019
role: Product Design
type: Mobile app
description: 
banner-image: "/assets/gogo-delivery-courier-banner.jpg"
thumbnail: "/assets/gogo-delivery-courier.jpg"
permalink: /gogox-courier-experience/
---

Nine months into launching Gogo Delivery (a crowd-sourced delivery service), the demand grew to a point where the supply couldn’t keep up. Couriers were scrolling through a long list of orders to find orders to take. Response time increased and completion rate dropped. To improve this, our team pivoted our objective to improve courier activation.

## My role

I led the design for courier experience. I worked closely with our PM, FE and BE enginers, Data Analyst, and cross-functional team (Operations, Customer Service, Marketing) throughout the design process.

## Research

Through user interviews and focus groups, we found that couriers had **difficulty in finding relevant orders**. A few months earlier, when there was less demand, there were only around twenty pending orders that couriers can pick from at a given time. Now, there's over a hundred.

We learned that couriers select orders based on distance from pick up location, drop off location and earnings. To empathize with our couriers, our team went out and delivered packages. This enabled further learnings such as order bundling planning to maximize travel efficiency and earnings, and package size and weight considerations.

## Design sprint

I led a design sprint with cross-functional teams to identify the key problems to tackle for courier activation and decide which ideas to test.

<figure>
	<div>
		<img class="lazy" data-src="/assets/ggd-courier-finding-orders-sketches.png" alt="Sketches from the design sprint to tackle couriers' problem of finding relevant orders">
	</div>
	<figcaption>Sketches from the design sprint to tackle couriers' problem of finding relevant orders</figcaption>
</figure>

## Most popular idea: Order bundling suggestion


<figure>
	<video class="lazy" style="max-width:960px;margin:0 auto" controls>
		<source src="https://cdn.dribbble.com/users/611270/videos/23476/20190424-courier-map-3.mp4" type="video/mp4">
	</video>
	<figcaption>Early prototype to explore suggested bundling for couriers</figcaption>
</figure>
We explored the most popular idea: a visual map to show couriers available orders based on their location and suggesting bundling to increase efficiency and income. However, due to the technical scope of this idea, we chose not to pursue this.

## Order suggestions
<figure>
	<div  class="ratio-4x3">
		<img class="lazy" data-src="/assets/ggd-courier-order-suggestions.png" alt="Push notifications for new orders based on proximity to active orders">
	</div>
	<figcaption>Push notifications for new orders based on proximity to active order</figcaption>
</figure>

Couriers tend to pick orders that are "on the way." We tested the idea of sending push notifications for new orders to active couriers based on their orders' pick up and drop off locations. This enables them to find orders they're interested in without opening the app.

## Order filtering

<figure>
	<div  class="ratio-4x3">
		<img class="lazy" data-src="/assets/ggd-courier-filters-flow.png" alt="Courier flow for filtering and sorting available orders">
	</div>
	<figcaption>Courier flow for filtering and sorting available orders</figcaption>
</figure>

We also explored using filters and sorting to help couriers find relevant orders. We tested the prototype with couriers and made several iterations to suit their needs and technical constraints. The final design uses a sticky top bar with dropdown menus to indicate active filters (in a different color) and the sorting method at all times. 

<figure>
	<video class="lazy" style="max-width:960px;margin:0 auto" controls>
		<source src="/assets/gogo-delivery-courier-filters.mp4" type="video/mp4">
	</video>
	<figcaption>Prototype for pick up region, drop off region filters and sorting by time, distance to pick up and earnings</figcaption>
</figure>

We shipped the order filtering and sorting first. We assumed this had the greatest outcome for couriers due to their strong preference of picking orders by region and earnings.

## Additional filters
<figure>
	<div  class="ratio-4x3">
		<img class="lazy" data-src="/assets/ggd-courier-filters-add.png" alt="Additional filters for time, package size, and weight">
	</div>
	<figcaption>Additional filters for time, package size, and weight</figcaption>
</figure>

In addition, we shipped filters for time constraints, package size, and weight. This enabled couriers to further filter orders that are more relevant to them - for example, package weights that they are physically capable of carrying when bundling orders.

## Outcome

- Daily orders by adopters increased 180%

- Response time reduced 83%

## Learnings

During product discovery, we learned that region filters are more impactful than size, weight, and time filters. After launch, we found that the pick up region filter had less usage than the other filters. Our assumptions are that couriers are constantly travelling, so changing the pick up filter is too interaction costly. Also the defined region polygons may be too geographically large to be helpful. This is something that we missed due to interviewing and testing with couriers in a de-contextualized/scripted environment. We can improve by using research methods that involve natural use of the product, such as ethnographic field studies or testing a prototype that can be used with real orders in a real environment.