(function () {
    "use strict";

    const videos = document.querySelectorAll("video");

    videos.forEach(function (currentVideo) {
        const card = currentVideo.closest(".featured-video, .film-card");

        currentVideo.addEventListener("play", function () {
            videos.forEach(function (video) {
                const videoCard = video.closest(".featured-video, .film-card");

                if (video !== currentVideo && !video.paused) {
                    video.pause();
                }

                if (videoCard) {
                    videoCard.classList.toggle("is-playing", video === currentVideo);
                }
            });
        });

        currentVideo.addEventListener("pause", function () {
            if (card) {
                card.classList.remove("is-playing");
            }
        });

        currentVideo.addEventListener("ended", function () {
            if (card) {
                card.classList.remove("is-playing");
            }
        });
    });
})();
