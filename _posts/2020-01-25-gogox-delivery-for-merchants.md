---
layout: post
company: GogoX
title: Building the delivery experience for small and medium-sized merchants
description: With the rise of e-commerce merchants using our delivery service, we identified, validated, and tackled their operational pain points by creating a seamless web and mobile app experience, simplifying their flow for repeat orders, and introducing bulk and API delivery to integrate with their e-commerce platforms. 
date: 2020-01-25 00:00:00 +0800
categories:
year: 2020
role: Product Design
type: Web
appstore-link:
googleplay-link:
banner-image: "/assets/ggd-web-banner.png"
thumbnail: "/assets/ggd-web-order-details.png"
permalink: /gogox-delivery-experience-for-merchants/
background-color: "#f1f1f1"
---

## Role

Gogo Delivery for business was a result of the continuous discovery that our PM and I conducted. I led user interviews, conducted surveys, and worked closely with our data analysts to learn more about our users on a regular basis. Based on our learnings, our PM and I defined product strategies that align with our business goals. From there, we defined hypotheses and metrics. I worked closely with engineers and the cross-functional team throughout the ideation and prototyping phase, sought feedback from designers via weekly critiques, and tested prototypes with merchants. For the final deliverables, I worked with designers who work on our Client mobile app and web app to align the UI and interaction, update the Design System if needed, and verify the translations. I discussed the design with engineers and QA during grooming, and design QA'ed before launch. Post-launch, we reviewed the metrics and retrospected.

## Research

After launching Gogo Delivery on mobile, we found that a small percentage of our users created a large percentage of orders. Through data and user interviews, we learned that these users were merchants selling food and beverages, beauty products, electronics, and pet products. We segmented these merchants into two groups based on their behavior.

### Ad hoc

- Places deliveries when needed
- Requires urgent delivery (like food and medicine)
- On the go, prefers to use mobile

### Batch

- Consolidates orders and places orders the day before or in the morning
- Doesn't require urgent delivery (like wine and electronics)
- Usually sits behind a computer to manage orders on e-commerce platforms



## Pain points

Pain points prioritized by severity (in bold) and frequency (highlighted in orange and yellow)

<figure><div><img class="lazy" data-src="/assets/ggd-web-user-journey.png" alt="User journey"></div></figure>



## Product strategy

Based on our continuous discovery learnings, we defined what our product should achieve for ad hoc and batch merchants to support our business objectives

- Create a web app that is seamless with the mobile experience
- Simplify the flow for repeat orders
- Enhance the experience for batch deliveries
- Help merchants manage multiple orders easier
- Allow merchants to add team members under one account and view monthly reports to save time on expensing

## Web app

For the initial scope, we created a web app with the same functionalities as our mobile app so that merchants who work on a desktop can place and manage orders easier (such as copy and pasting delivery information from their e-commerce platform). The desktop real estate enabled us to create a single form for placing an order without going back and forth between screens, and a table view for managing orders easier.

<!--
<figure><div><img class="lazy" data-src="/assets/ggb-place-order.png" alt="Place order screens"></div></figure>

<figure><div><img class="lazy" data-src="/assets/ggb-order-management.png" alt="Order management screens"></div></figure>
-->

<figure>
	<div style="background-color:#F1F1F1;padding: 2rem">
		<video class="lazy" style="margin:0 auto" controls>
			<source src="/assets/ggb-place-order.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>Place order flow</figcaption>
</figure>

<figure>
	<div style="background-color:#F1F1F1;padding: 2rem">
		<video class="lazy" style="margin:0 auto" controls>
			<source src="/assets/ggb-order-management.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>Order management</figcaption>
</figure>

## Simplified repeat orders

We observed merchants placing orders and found that they tend to deliver items to frequent customers with similar package information. Some of the merchants even used the native mobile keyboard shortcuts to fill in the order form easier.

To help merchants place orders, we enabled autofill for the sender, recipient, and package information so that they can fill in most of the form in a few clicks without inputting each field individually.

<figure><div><img class="lazy" data-src="/assets/ggb-autofill.jpg" alt="Autofill order information"></div></figure>

We also launched "reuse order" under order details so merchants can request an order with the same details easily.

<figure><div><img class="lazy" data-src="/assets/ggb-reuse-details.png" alt="Reuse order details"></div></figure>



## Bulk order

We learned that merchants who consolidate orders and batch delivery orders manage their orders internally using spreadsheets. Some of them sold products on several different platforms, like Shopify, Shopline, and Price. They export spreadsheets from these platforms and combine the orders into one spreadsheet for management. They were also familiar with using bulk spreadsheet import on other logistic platforms. During user interviews, we learned more about their likes and dislikes on the bulk importing experience.

One of the challenges when designing this feature was balancing the error handling experience with technical effort. Our engineers and I narrowed down to three options, from the lowest to highest effort and worst to best experience:

- Returning a list of errors
- Generate a CSV with errors on a new column
- Display errors in an editable table

When I showed these prototypes to merchants, their main concern was the validation handling for the addresses (a limitation with using Google Places) and drop-off times (due to cut-off time rules). We decided to launch a version that simply returns a list of errors to a closed beta group first, while simultaneously working on the editable table.

<figure><div><img class="lazy" data-src="/assets/ggb-bulk-flows.png" alt="Bulk order flows"></div><figcaption>A comparison between the low effort and the ideal flow. In phase 1, merchants are required to go back and forth between spreadsheet and the list of errors to amend errors before uploading again - an existing pain point for merchants who use other products. The editable table allows merchants to directly amend errors on the table.</figcaption></figure>

To reduce errors before import, we added data validation on the spreadsheet template. We also added examples at the top to help first-time users understand what to enter.

<figure><div><img class="lazy" data-src="/assets/ggb-bulk-excel.png" alt="Bulk order Excel file"></div><figcaption>An example of a filled template with data validation errors (marked with a red corner)</figcaption></figure>

<figure><div><img class="lazy" data-src="/assets/ggb-bulk-validation-1.png" alt="Bulk order validation v1"></div><figcaption>Phase 1: Returned list of errors. In this example, the address is invalid, and backend returns a list of valid suggestions so merchants can copy the correct address and paste in their spreadsheet before importing again.</figcaption></figure>

<figure>
	<div style="background-color:#F1F1F1;padding: 2rem">
		<video class="lazy" style="margin:0 auto" controls>
			<source src="/assets/ggb-bulk-order-spreadsheet.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>Bulk order spreadsheet</figcaption>
</figure>

<figure>
	<div style="background-color:#F1F1F1;padding: 2rem">
		<video class="lazy" style="margin:0 auto" controls>
			<source src="/assets/ggb-bulk-order.mp4" type="video/mp4">
		</video>
	</div>
	<figcaption>Bulk order import shipped for phase 2 with editable table for merchants to amend any invalid fields</figcaption>
</figure>

## Reducing address input and errors

Shortly after rolling out the editable table to merchants, we found that there was a high amount of errors for recipient address. This was in line with our assumption that the Google Places API couldn't return a match based on the merchants' customers' input. To validate this assumption, we interviewed several merchants. Luckily, the merchants shared with us screenshots of real input from the customers. Most of these addresses resulted in no match found. After importing, merchants had to go into each incorrect address and then manually edit them one by one in order to get a match. Furthermore, merchants expressed concern over having to manually split the address details (i.e. floor and room) from the building / street and number.

To tackle this issue, I led a brainstorming session with the engineers to find ways to match addresses better and reduce the effort from the merchant side during import. Initially, I wanted to figure out the root cause of the Google API not being able to return results, because most of the addresses were able to return on Google Maps. However, due to a limitation of resource from our backend engineer, we explored how we could tackle it on the front-end. 

<figure><div><img class="lazy" data-src="/assets/ggb-als-flow.png" alt="Bulk order address input and error improvement flow"></div><figcaption>Bulk order address input and error improvement flow</figcaption></figure>

Our front-end engineers found a local service that could dissect an address, which we could then select parts of the address query and improve the rate of matching on our existing API. For example, we found that searching residential addresses by the street, number, and district only increased the matching rate significantly. This would also allow merchants to copy and paste customers' addresses without having to manually separate the details.

<figure><div><img class="lazy" data-src="/assets/ggb-als-poc.png" alt="The POC returns 25x less errors"></div><figcaption>The POC returns 25x less errors</figcaption></figure>

We went on to build a proof of concept and ran thousands of addresses to test the solution. In the first version, the matching rate increased by over 25x. However, with an increased matching rate, there's a higher chance of matching a wrong address. Luckily, there's a confidence score from the lookup service, so we sorted the addresses and results based on the score, and cross referenced them to determine the threshold for marking a result inconfident. For these results, we highlighted them in the table and prompted the merchant to double check with the original address before placing the order.

To futher increase the matching rate, we looked at the remaining results that couldn't get a match. We found that by reformatting building names and block numbers, the API returned a more accurate result, which accounted for 4% of the addresses tested. There's also 1% of addresses that are in villages without accurate street names on Google, so for those cases we searched by village name and number instead.

<!--
<figure><div><img class="lazy" data-src="/assets/ggb-bulk-validation-2.png" alt="Bulk order validation v2"></div><figcaption>Phase 2: Editable table. Cells with errors are marked in red. Merchants can edit the values directly on the table. In this example, one of the addresses is invalid, and the merchant can select a valid address from the dropdown.</figcaption></figure> -->

## Shipping label and QR code

During our store visits and taking orders as couriers, we found that many merchants wrote the recipient district and pick-up verification code on labels or directly on the packages. To aid this process, we introduced shipping labels that merchants can choose to print after placing their orders. Interestingly, when we tested this with merchants, some said they still preferred to hand-write to save the environment and printing costs.

<figure><div><img class="lazy" data-src="/assets/ggb-package-labels-writing.jpg" alt="Merchant's handwritten notes"></div><figcaption>Examples of merchant's handwritten notes to aid package management and pick-up process. Most merchants wrote down the recipient district (what couriers look for when collecting packages) and the pick-up code (what couriers look for to verify package pick-up) </figcaption></figure>

<figure><div><img class="lazy" data-src="/assets/ggb-label-markup.png" alt="Shipping label markup"></div><figcaption>Shipping label design</figcaption></figure>

<figure><div><img class="lazy" data-src="/assets/ggb-print-labels.png" alt="Printing shipping labels"></div><figcaption>Merchants can print shipping labels after placing batch deliveries.</figcaption></figure>

## Outcome

- Package information autofill reduced time spent on the order form by 23%
- Reuse order contributed to 93% increase in orders placed
- 65% merchants print shipping labels