<div id="top"></div>

<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/heIsThePirate/vimeo-helpers">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">vimeo_helpers</h3>

  <p align="center">
    A set of helper functions for uploading and managing videos on Vimeo.
    <br />
    <a href="https://github.com/heIsThePirate/vimeo-helpers"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/heIsThePirate/vimeo-helpers/issues">Report a Bug</a>
    ·
    <a href="https://github.com/heIsThePirate/vimeo-helpers/issues">Request a Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Getting Started

```sh
npm install vimeo-helpers

 or

yarn add vimeo-helpers
```

### Prerequisites

* You need to firstly [create a Vimeo app](https://developer.vimeo.com/apps/new) and then create a new access token with the required permissions (read, write, delete).

* Create a `.env` file in the root directory of your project and put the previously obtained access token in it.
```sh
    VIMEO_ACCESS_TOKEN=<YOUR_TOKEN>
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

TBA

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Uploading video
    - [x] Get upload link
    - [x] Upload video blob
    - [x] Get trancoding status
    - [x] Get thumbnail URL
- [ ] Managing an uploaded video
    - [x] Move to a different folder
    - [ ] Edit video
    - [ ] Check if the user owns a video
    - [x] Delete video
    - [ ] Create a set of animated thumbnails for a video
    - [ ] Add a domain to a video's whitelist
    - [ ] Add or remove a video from a list of showcases
    - [ ] Add a list of tags to a video
    - [ ] Add a specific tag to a video
    - [ ] Remove a tag from a video
    - [ ] Add a text track to a video
    - [ ] Delete a text track
    - [ ] Edit a text track
    - [ ] Add a video thumbnail
    - [ ] Delete a video thumbnail
    - [ ] Edit a video thumbnail
- [ ] Getters
    - [ ] Get all the videos that the user has uploaded
    - [ ] Search for videos
    - [ ] Get all content ratings
    - [ ] Get all the domains on a video's whitelist
    - [ ] Get all the related videos of a video
    - [ ] Get all the albums that contain a video
    - [ ] Get all the videos with a specific tag
    - [ ] Get all the text tracks of a video
    - [ ] Get all the thumbnails of a video

See the [open issues](https://github.com/heIsThePirate/vimeo-helpers/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement"/"feature".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feat/amazingFeature`)
3. Commit your Changes (`git commit -m 'Add some amazing feature'`)
4. Push to the Branch (`git push --set-upstream origin feat/amazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@strawhat_Mohit](https://twitter.com/strawhat_Mohit) - mohitsingh1997@gmail.com

Project Link: [https://github.com/heIsThePirate/vimeo-helpers](https://github.com/heIsThePirate/vimeo-helpers)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/heIsThePirate/vimeo-helpers.svg?style=for-the-badge
[contributors-url]: https://github.com/heIsThePirate/vimeo-helpers/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/heIsThePirate/vimeo-helpers.svg?style=for-the-badge
[forks-url]: https://github.com/heIsThePirate/vimeo-helpers/network/members
[stars-shield]: https://img.shields.io/github/stars/heIsThePirate/vimeo-helpers.svg?style=for-the-badge
[stars-url]: https://github.com/heIsThePirate/vimeo-helpers/stargazers
[issues-shield]: https://img.shields.io/github/issues/heIsThePirate/vimeo-helpers.svg?style=for-the-badge
[issues-url]: https://github.com/heIsThePirate/vimeo-helpers/issues
[license-shield]: https://img.shields.io/github/license/heIsThePirate/vimeo-helpers.svg?style=for-the-badge
[license-url]: https://github.com/heIsThePirate/vimeo-helpers/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mohitsingh97
[product-screenshot]: images/screenshot.png