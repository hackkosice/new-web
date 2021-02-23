---
title: HK Marathon
description: A 10-week hackathon full of inspiring challenges and mentorship organized by sponsors
menu:
  main:
    parent: hkmarathon
    weight: 20
#draft: true
use_sections: true
layout: single
scripts:
- js/marathon-timer.js

what_is_it:
  #title: How far can you run?
  serviceItem:
  - title: 'Teams of **1 -- 3 people**'
    background: "#5e2137"
    textcolor: white
    icon: "ti-user" # here we use themify icon pack : https://themify.me/themify-icons
  - title: 'Duration: **10 weeks**'
    background: "#5e2137"
    textcolor: white
    icon: "ti-timer" # here we use themify icon pack : https://themify.me/themify-icons
  - title: "**5 engaging challenges**"
    background: "#5e2137"
    textcolor: white
    icon: "ti-light-bulb" # here we use themify icon pack : https://themify.me/themify-icons
  - title: "**3 sponsors**"
    background: "#5e2137"
    textcolor: white
    icon: "ti-briefcase" # here we use themify icon pack : https://themify.me/themify-icons

sideimg1:
  title: 'How can I join?'
  image: images/events/marathon/discord-logo-white.png
  format: original
  link: https://hackkosice.com/discord
  class: no-img-shadow section-flamingo
  button:
    enable: true
    label: Join discord
    class: btn-white btn-border-white
    link: https://hackkosice.com/discord

leaderboard:
  title: Public leaderboard
  background: images/bg/background2.png
  content: "For each solved task you will earn **kilometers**. The standings in the leaderboard all always **public** and updated *instantly*. You can always see them on **[Discord](https://hackkosice.com/discord)** or [our website](/marathon/leaderboard). **Who can run the furthest?**"
#    button:
#      enable: true
#      label : "Read more"
#      link : "about"

who_can_join:
  subtitle: HK Marathon
  title: Who can join?
  featureItem:
  - icon : "ti-shortcode" # here we use themify icon pack : https://themify.me/themify-icons
    title: Programmers
    content: Many challenges can be solved through programming.
  - icon : "ti-ruler-pencil" # here we use themify icon pack : https://themify.me/themify-icons
    title: Designers
    content: Non-tech people like designers will be a strong support for every team.
  - icon : "ti-light-bulb" # here we use themify icon pack : https://themify.me/themify-icons
    title: Thinkers, ideators
    content: "Creative solutions are needed to succeed in the completion of challenges."
  - icon : "ti-rocket" # here we use themify icon pack : https://themify.me/themify-icons
    title: Team leaders
    content: An enthusiastic team leader is a must-have!

column-list1:
  title: What is a challenge?
  text: "Every **two weeks** there will be a new challenge to solve. Most of the challenges in HK Marathon are provided by our **sponsors**. Each challenge consists of two parts that can award you with *kilometres*. It's entirely up to **you** how do you decide to approach the challenge! <br/> **The two parts are:**"
  columns:
    - title: Closed part
      content: |
        - **Speed matters, points count** – how fast from the start can you solve this problem?
        - Algorithmic task that has objectively correct answer.
    - title: Open part
      content: |
        - More open task that you can interpret yourself
        - Usually requires more time and goal is to create some application, design sheet, train AI etc.
        - You can be creative, and it's completely up to you what you will come up with!

prizes:
  featureItem:
    - icon: "ti-light-bulb" # here we use themify icon pack : https://themify.me/themify-icons
      title: Special HK prizes
      content: |
        - Awarded at the end of the whole HK Marathon 
        - Top 3 teams in the leaderboard (with the most kilometers collected)
    - icon: "ti-gift" # here we use themify icon pack : https://themify.me/themify-icons
      title: Sponsors' prizes
      content: |
         - Sponsors choose the best open part project every two weeks (at the end of their challenge)
         - One (or more) best projects are awarded with a special prize
    - icon: "ti-announcement" # here we use themify icon pack : https://themify.me/themify-icons
      title: Public voting
      content: |
        - People can choose the best project from open part after every two weeks on our social media
        - Top 5 projects win awesome Hack Kosice swag
smallcta1:
  title : "Can you run the full Marathon with us?"
  button:
    label : "Join"
    link : "/discord"
---

{{< section class="no-img-shadow full-width pb-0 pt-1" >}}
<img src="{{< static `images/events/marathon/bg_marathon.svg` >}}" class="img-fluid no-shadow" />
{{< /section >}}

{{< section class="pb-0" >}}
# Marathon by Hack Kosice

### Marathon is a 12-week hackathon full of inspiring challenges and mentorship organized by sponsors. { .mb-4.text-dark.font-weight-normal }

* Solve a new challenge every two weeks
* Submit your solutions
* Get awarded kilometres
* Get to the top of the leaderboard
* Win awesome prizes
{{< /section >}}

{{< section type="solutions" config="what_is_it" class="py-0" >}}
<!--Solve our open and closed problems every fortnight, earn points and get on top of the leaderboard. -->
{{< /section >}}

{{< section type="feature" config="who_can_join" class="pb-0" >}}
Anyone can join. High school or university students are especially welcome!
{{< /section >}}

{{< section type="sideimg" config="sideimg1" >}}
HK Marathon will be fully online event integrated into our Discord server!

* Join our discord and follow instructions on there to register for the event
* Through interacting with our custom Marathon bot find all the challenges and provide your solutions.
* Chat and connect with other hackers and help us make one great community!
{{< /section >}}

{{< section type="column-list" config="column-list1" / >}}

{{< section type="cta" config="leaderboard" / >}}

{{< section class="pb-0" >}}
## How can you win?
{{< /section >}}

{{< section type="bannerFeature" config="prizes" / >}}

{{< section type="smallcta" config="smallcta1" class="section pb-0" / >}}

{{< section class="pt-0 bg-light" >}}
<div class="text-center lead">Marathon starting in:</div>
<div id="marathon-timer" class="text-center display-4"></div>
{{< /section >}}
