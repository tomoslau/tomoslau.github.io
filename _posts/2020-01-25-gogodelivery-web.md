---
layout: post
title: GOGO Delivery for business
date: 2020-01-25 00:00:00 +0800
categories:
year: 2020
role: Product designer
type: Web
appstore-link:
googleplay-link:
description: 
banner-image: "/assets/ggd-web-banner.png"
thumbnail: "/assets/ggd-web-order-details.png"
permalink: /gogo-delivery-web/
---

## Role

GOGO Delivery for business was a result of the continuous discovery that our PM and I conducted. I led user interviews, conducted surveys, and worked closely with our data analysts to learn more about our users on a regular basis. Based on our learnings, our PM and I defined product strategies that align with our business goals. From there, we defined hypotheses and metrics. I worked closely with engineers and the cross-functional team throughout the ideation and prototyping phase, sought feedback from designers via weekly critiques, and tested prototypes with merchants. For the final deliverables, I worked with designers who work on our Client mobile app and web app to align the UI and interaction, update the Design System if needed, and verify the translations. I discussed the design with engineers and QA during grooming, and design QA'ed before launch. Post-launch, we reviewed the metrics and retrospected.

## Research

After launching GOGO Delivery on mobile, we found that a small percentage of our users created a large percentage of orders. Through data and user interviews, we learned that these users were merchants selling food and beverages, beauty products, electronics, and pet products. We segmented these merchants into two groups based on their behavior.

### Ad hoc

- Places deliveries when needed
- Requires urgen`t delivery (like food and medicine)
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

<figure><div><img class="lazy" data-src="/assets/ggb-place-order.png" alt="Place order screens"></div></figure>

<figure><div><img class="lazy" data-src="/assets/ggb-order-management.png" alt="Order management screens"></div></figure>



## Simplified repeat orders

We observed merchants placing orders and found that they tend to deliver items to frequent customers with similar package information. Some of the merchants even used the native mobile keyboard shortcuts to fill in the order form easier.

To help merchants place orders, we enabled autofill for sender, recipient, and package information so that they can fill in most of the form in a few clicks without inputting each field individually.

<figure><div><img class="lazy" data-src="/assets/ggb-autofill.jpg" alt="Autofill order information"></div></figure>

We also launched "reuse order" under order details so merchants can request an order with the same details easily.

<figure><div><img class="lazy" data-src="/assets/ggb-reuse-details.png" alt="Reuse order details"></div></figure>



## Batch deliveries

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

<figure><div><img class="lazy" data-src="/assets/ggb-bulk-validation-2.png" alt="Bulk order validation v2"></div><figcaption>Phase 2: Editable table. Cells with errors are marked in red. Merchants can edit the values directly on the table. In this example, one of the addresses is invalid, and the merchant can select a valid address from the dropdown.</figcaption></figure>

During our store visits and taking orders as couriers, we found that many merchants wrote the recipient district and pick-up verification code on labels or directly on the packages. To aid this process, we introduced shipping labels that merchants can choose to print after placing their orders. Interestingly, when we tested this with merchants, some said they still preferred to hand-write to save the environment and printing costs.

<figure><div><img class="lazy" data-src="/assets/ggb-package-labels-writing.jpg" alt="Merchant's handwritten notes"></div><figcaption>Examples of merchant's handwritten notes to aid package management and pick-up process. Most merchants wrote down the recipient district (what couriers look for when collecting packages) and the pick-up code (what couriers look for to verify package pick-up) </figcaption></figure>

<figure><div><img class="lazy" data-src="/assets/ggb-label-markup.png" alt="Shipping label markup"></div><figcaption>Shipping label design</figcaption></figure>

<figure><div><img class="lazy" data-src="/assets/ggb-print-labels.png" alt="Printing shipping labels"></div><figcaption>Merchants can print shipping labels after placing batch deliveries.</figcaption></figure>

## Outcome

Launching soon - will update