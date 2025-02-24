RED: Physical Media Finder for Music Requests
=============================
[View](https://greasyfork.org/en/scripts/527903-red-physical-media-finder-for-music-requests) | [Install](https://update.greasyfork.org/scripts/527903/RED%3A%20Physical%20Media%20Finder%20for%20Music%20Requests.user.js) | [Github](https://github.com/k0r302/red-physical-media-finder)

*Disclaimer: Always make sure to read the instructions, as well as the source code, of any user script you install.*

Description
-----------
Inspired by "[Purchase Links for Music Requests](https://redacted.sh/forums.php?action=viewthread&threadid=39104)", this scripts adds marketplace purchase links, lowest prices and Cost per GB (bounty) for physical media requests on RED. Currently supporting Discogs.

It focus on ease-of-use and reduces decision stress by only showing the best bang for your buck to fill a request or improve your collection.

Useful for collectionists, as well as for users that have proper ripping equipment and are trying to [improve upload ratio](https://redacted.sh/wiki.php?action=article&id=70#_1363336749) without breaking the bank.

![](https://i.imgur.com/YaFotZn.png)

Currently available on the RED requests view page only (`requests.php?action=view&id=*`).

How It Works
------------
It looks for Discogs release URLs on the description of the music request, then it goes to Discogs and get the lowest prices, then calculate the cost per GB for that release and provide a standardized price ranking (from $ to $$$$$). The information shows up on a new row named "Physical Media Finder" on the request page's main table for all physical media releases.

When a Discogs link is not available in the description, we give the option to the user to search by artist and title, catalog number, etc.

Disclaimers
-----------
- Only tested with Violentmonkey / Firefox / RED Dark.
- Always double-check the release to see if it really matches the request before spending your money.

Usage
-----
Browse to a request page, and wait for a moment for the "Physical Media Finder" section to show up on the first row of the main table (right above the Created field, see screenshots below).

The table will only show up for music requests that has the following Acceptable media: CD, Vinyl, Cassette, SACD, DVD, Blu-Ray or Any.

Features
--------
- Mouse-over the lowest price cell to see all available prices for that release without going to Discogs.
- Cost per GB cell background changes from green shades all the way to red shades; green being inexpensive and red being an expensive request.
- Mouse-over the cost per GB value to see more details about it.
- Configure the script options by clicking the "⚙️", e.g.: change the colors and thresholds for what you consider expensive or not expensive. After saving it, the page will be automatically reloaded.

Requirements
------------
1. None. But I recommend you to log into your Discogs accounts for more accurate prices that includes proper shipping prices.

Screenshots
-----------
![](https://i.imgur.com/YaFotZn.png)
![](https://i.imgur.com/69PbDkQ.png)
![](https://i.imgur.com/CmfKS9V.png)
![](https://i.imgur.com/t9ptl57.png)
![](https://i.imgur.com/lce9Xtz.png)
![](https://i.imgur.com/nGu1eL2.png)
![](https://i.imgur.com/c2g0cS2.png)

Feature Ideas
---------------
- [ ] Show cost per GB in the requests lists.
- [ ] Add "add to cart" button for extra convenience.

Bugs and Feature Requests
----------------------------
Please post your bugs and feature requests on the [project's Github page](https://github.com/k0r302/red-physical-media-finder/issues).

Changelog
---------
v1.0.0
- First release. Supports enhancing the requests.php view page with Discogs lowest price, cost per GB and release link.