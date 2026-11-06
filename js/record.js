(function () {
    "use strict";

    const AMAP_KEY = "5815b68e6d62967018bdf69fc293fbe5";

    /*
     * 后续补充真实照片时，只需把对应 image 改为本地路径，
     * 例如："./images/record/shanghai-01.jpg"。
     * image 为空时，页面自动显示统一地点视觉，不会出现破图。
     */
    const practiceStops = [
        {
            id: 1,
            city: "上海",
            code: "SHANGHAI · 01",
            keyword: "上海吴淞炮台湾国家湿地公园",
            title: "吴淞炮台湾国家湿地公园",
            address: "上海市宝山区塘后路206号",
            fallback: [121.509028, 31.396662],
            images: [
                "./images/吴淞炮台湾湿地公园/DSC_0831.jpg",
                "./images/吴淞炮台湾湿地公园/DSC_0843.jpg",
                "./images/吴淞炮台湾湿地公园/26b93b6e0033509a50dae06017b1d5ce.jpg"
            ],
            description: "实践队来到吴淞炮台湾国家湿地公园，围绕滨江生态空间、湿地保护以及城市与港口空间之间的关系开展现场观察。",
            reflection: "从滨江湿地出发，我们更加直观地理解生态保护、城市公共空间与港航发展并不是彼此孤立的议题。"
        },
        {
            id: 2,
            city: "上海",
            code: "SHANGHAI · 02",
            keyword: "北外滩航海公园",
            title: "北外滩航海公园",
            address: "上海市虹口区北外滩国客中心",
            fallback: [121.498060, 31.247298],
            images: [
                "./images/北外滩航海公园/DJI_20260711134322_0184_D.jpg",
                "./images/北外滩航海公园/DSC_0870.jpg",
                "./images/北外滩航海公园/a437e71be14f6848753fa1dc16a50145.jpg"
            ],
            description: "团队沿北外滩滨江空间开展城市观察，从黄浦江沿岸景观、公共空间和航运文化等角度记录上海港城关系。",
            reflection: "站在黄浦江畔，港口、城市天际线与市民公共空间同时进入视野，让港城关系变得具体可感。"
        },
        {
            id: 3,
            city: "上海",
            code: "SHANGHAI · 03",
            keyword: "中国航海博物馆",
            title: "中国航海博物馆",
            address: "上海市浦东新区申港大道197号",
            fallback: [121.919745, 30.896190],
            images: [
                "./images/航海博物馆/da68d2ff842b701bde67be116c0305b5.jpg",
                "./images/航海博物馆/c491a9d744ac321cd2ba90a3da94a80e.jpg",
                "./images/航海博物馆/5277ed0a28d59c3be10fcf35a8cef26f.jpg"
            ],
            description: "实践队走进中国航海博物馆，通过航海历史、船舶发展、航海技术与海洋文化展陈，认识中国航运事业的发展脉络。",
            reflection: "航海并不只是船舶本身，它同时连接工程技术、港口建设、贸易往来与更广阔的海洋文化。"
        },
        {
            id: 4,
            city: "宁波",
            code: "NINGBO · 01",
            keyword: "宁波老外滩",
            title: "宁波老外滩",
            address: "宁波市江北区中马路157号—159号",
            fallback: [121.560634, 29.876526],
            images: [
                "./images/老外滩/68a77e8111f95baeba77a8372d8b8a83.jpg"
            ],
            description: "实践队来到宁波老外滩，通过历史建筑、滨江街区和现代城市空间，观察宁波近代港口发展留下的城市印记。",
            reflection: "当历史建筑进入今天的城市生活，城市空间本身就成为记录港口发展的一种特殊档案。"
        },
        {
            id: 5,
            city: "宁波",
            code: "NINGBO · 02",
            keyword: "宁波三江口",
            title: "三江口",
            address: "宁波市中心三江交汇区域",
            fallback: [121.556280, 29.875720],
            images: [
                "./images/三江口/DJI_20260709104549_0113_D.jpg",
                "./images/三江口/DJI_20260709104611_0116_D.jpg",
                "./images/三江口/DSC_0472.jpg"
            ],
            description: "团队来到余姚江、奉化江与甬江交汇的三江口，从自然地理、水系格局和城市发展等角度观察宁波核心城区的形成。",
            reflection: "三江汇流不仅塑造城市景观，也深刻影响了宁波交通、商贸与港城发展的历史。"
        },
        {
            id: 6,
            city: "宁波",
            code: "NINGBO · 03",
            keyword: "宁波潜艇展示园",
            title: "宁波潜艇展示园",
            address: "宁波市北仑区春晓区域",
            fallback: [121.908700, 29.755600],
            images: [
                "./images/潜艇展示园/13428472920607928.jpeg",
                "./images/潜艇展示园/13428472903657386.jpeg"
            ],
            description: "团队通过潜艇实物与相关展示了解内部空间、海洋装备及工程技术知识，把专业观察延伸到真实装备场景。",
            reflection: "真实装备带来的空间尺度与工程复杂度，是图片和文字无法完全替代的实践体验。"
        },
        {
            id: 7,
            city: "宁波",
            code: "NINGBO · 04",
            keyword: "中国港口博物馆",
            title: "中国港口博物馆",
            address: "宁波市北仑区春晓街道港博路6号",
            fallback: [121.909509, 29.756117],
            images: [
                "./images/港口博物馆/DSC_0685.jpg",
                "./images/港口博物馆/DSC_0608.jpg",
                "./images/港口博物馆/DSC_0480.jpg"
            ],
            description: "实践队走进中国港口博物馆，从港口历史、港航技术、港口工程与海洋文化等视角系统认识中国港口的发展。",
            reflection: "港口不仅承担物流功能，也是城市连接区域、国家与世界的重要基础设施节点。"
        },
        {
            id: 8,
            city: "宁波",
            code: "NINGBO · 05",
            keyword: "月湖公园",
            title: "月湖公园",
            address: "宁波市海曙区镇明路",
            fallback: [121.543597, 29.867182],
            images: [
                "./images/月湖公园/DSC_0434.jpg",
                "./images/月湖公园/3a3a3e569c394f9e4060bf1595447bd2.jpg"
            ],
            description: "团队在月湖公园开展历史文化空间观察，了解自然景观、人文遗存与现代公共空间如何共同构成城市文化景观。",
            reflection: "公共空间不仅用于休闲，也承担着保存城市记忆、连接传统文化与现代生活的重要作用。"
        },
        {
            id: 9,
            city: "宁波",
            code: "NINGBO · 06",
            keyword: "天一阁博物院",
            title: "天一阁博物院",
            address: "宁波市海曙区天一街10号",
            fallback: [121.539575, 29.871370],
            images: [
                "./images/天一阁/DSC_0327.jpg",
                "./images/天一阁/DJI_20260708145247_0036_D_004.jpg",
                "./images/天一阁/f7fac3ebfe75687bab20c9d3a5181f94.jpg"
            ],
            description: "实践队参访天一阁博物院，从藏书文化、历史建筑与地方文脉等角度认识宁波深厚的人文传统和文化遗产保护实践。",
            reflection: "文化遗产并不只是过去留下的遗迹，它仍通过建筑、典籍与公共文化空间参与今天的城市生活。"
        },
        {
            id: 10,
            city: "宁波",
            code: "NINGBO · 07",
            keyword: "庆安公园",
            title: "庆安公园",
            address: "宁波市三江口滨江区域",
            fallback: [121.568000, 29.875000],
            images: [
                "./images/庆安公园/DSC_0725.jpg",
                "./images/庆安公园/DSC_0727.jpg",
                "./images/庆安公园/DSC_0736.jpg",
                "./images/庆安公园/DSC_0741.jpg"
            ],
            description: "团队在庆安公园及周边滨江空间开展观察，从港航历史、城市公共空间与现代市民生活等角度认识宁波港城文化。",
            reflection: "滨水空间让港航历史从博物馆延伸到城市日常，也为理解宁波的港城特征提供了新的观察角度。"
        }
    ];

    const detailCity = document.getElementById("detailCity");
    const detailIndex = document.getElementById("detailIndex");
    const detailTitle = document.getElementById("detailTitle");
    const detailAddress = document.getElementById("detailAddress");
    const detailVisual = document.getElementById("detailVisual");
    const detailDescription = document.getElementById("detailDescription");
    const detailReflection = document.getElementById("detailReflection");
    const detailCount = document.getElementById("detailCount");
    const timeline = document.getElementById("timeline");
    const mapError = document.getElementById("mapError");
    const mapErrorText = document.getElementById("mapErrorText");

    let map = null;
    let AMapInstance = null;
    let markers = [];
    let routeShanghai = null;
    let routeNingbo = null;
    let routeIntercity = null;
    let infoWindow = null;
    let activeIndex = 0;
    let activeFilter = "全部";
    let detailTransitionTimer = 0;
    const detailPanel = document.querySelector(".detail-panel");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function placeholderMarkup(stop) {
        return `
            <div class="location-placeholder">
                <span>${stop.code}</span>
                <strong>${stop.title}</strong>
                <small>现场影像待补充</small>
            </div>
        `;
    }

    function visualMarkup(stop) {
        if (stop.images && stop.images.length > 0) {
            if (stop.images.length === 1) {
                return `<img src="${stop.images[0]}" alt="${stop.title}实践现场">`;
            }

            const slides = stop.images.map(function(img, idx) {
                return `<div class="gallery-slide ${idx === 0 ? 'is-active' : ''}"><img src="${img}" alt="${stop.title}实践现场"></div>`;
            }).join('');

            const dots = stop.images.map(function(_, idx) {
                return `<button class="gallery-dot ${idx === 0 ? 'is-active' : ''}" data-index="${idx}" aria-label="查看第${idx + 1}张照片"></button>`;
            }).join('');

            return `
                <div class="photo-gallery">
                    <div class="gallery-track">${slides}</div>
                    ${stop.images.length > 1 ? `
                        <button class="gallery-nav gallery-prev" aria-label="上一张">‹</button>
                        <button class="gallery-nav gallery-next" aria-label="下一张">›</button>
                        <div class="gallery-dots">${dots}</div>
                    ` : ''}
                </div>
            `;
        }

        return placeholderMarkup(stop);
    }

    function renderTimeline() {
        timeline.innerHTML = "";

        practiceStops.forEach(function (stop, index) {
            const item = document.createElement("button");

            item.type = "button";
            item.className = "timeline-item";
            item.dataset.index = String(index);
            item.dataset.city = stop.city;
            item.innerHTML = `
                <span>${String(stop.id).padStart(2, "0")}</span>
                <strong>${stop.title}</strong>
                <small>${stop.city}</small>
            `;

            item.addEventListener("click", function () {
                selectStop(index, true);
                document.getElementById("mapSection").scrollIntoView({ behavior: "smooth" });
            });

            timeline.appendChild(item);
        });
    }

    function renderDetail(stop, index) {
        activeIndex = index;
        detailCity.textContent = stop.city;
        detailIndex.textContent = stop.code;
        detailTitle.textContent = stop.title;
        detailAddress.textContent = stop.realAddress || stop.address;
        detailVisual.innerHTML = visualMarkup(stop);
        detailDescription.textContent = stop.description;
        detailReflection.textContent = stop.reflection;
        detailCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(practiceStops.length).padStart(2, "0")}`;

        // 初始化照片轮播
        initGallery(stop);

        document.querySelectorAll(".timeline-item").forEach(function (item) {
            const isActive = Number(item.dataset.index) === index;

            item.classList.toggle("is-active", isActive);

            if (isActive && timeline.scrollWidth > timeline.clientWidth) {
                const targetLeft = item.offsetLeft - (timeline.clientWidth - item.offsetWidth) / 2;

                timeline.scrollTo({
                    left: Math.max(0, targetLeft),
                    behavior: reduceMotion ? "auto" : "smooth"
                });
            }
        });

        markers.forEach(function (marker, markerIndex) {
            if (marker.domElement) {
                marker.domElement.classList.toggle("is-active", markerIndex === index);
            }
        });
    }

    let currentGalleryIndex = 0;
    let galleryTimer = null;

    function initGallery(stop) {
        if (!stop.images || stop.images.length <= 1) {
            return;
        }

        currentGalleryIndex = 0;

        if (galleryTimer) {
            clearInterval(galleryTimer);
        }

        const prevBtn = detailVisual.querySelector('.gallery-prev');
        const nextBtn = detailVisual.querySelector('.gallery-next');
        const dots = detailVisual.querySelectorAll('.gallery-dot');

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                showGallerySlide(stop, currentGalleryIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                showGallerySlide(stop, currentGalleryIndex + 1);
            });
        }

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                showGallerySlide(stop, Number(dot.dataset.index));
            });
        });

        // 自动轮播
        galleryTimer = setInterval(function() {
            showGallerySlide(stop, currentGalleryIndex + 1);
        }, 4000);
    }

    function showGallerySlide(stop, index) {
        if (!stop.images || stop.images.length <= 1) {
            return;
        }

        const totalSlides = stop.images.length;
        currentGalleryIndex = ((index % totalSlides) + totalSlides) % totalSlides;

        const slides = detailVisual.querySelectorAll('.gallery-slide');
        const dots = detailVisual.querySelectorAll('.gallery-dot');

        slides.forEach(function(slide, idx) {
            slide.classList.toggle('is-active', idx === currentGalleryIndex);
        });

        dots.forEach(function(dot, idx) {
            dot.classList.toggle('is-active', idx === currentGalleryIndex);
        });
    }

    function updateDetail(index) {
        const stop = practiceStops[index];
        const isSameStop = activeIndex === index;

        activeIndex = index;
        window.clearTimeout(detailTransitionTimer);

        if (reduceMotion || !detailPanel || isSameStop) {
            renderDetail(stop, index);

            if (detailPanel) {
                detailPanel.classList.remove("is-changing");
            }

            return;
        }

        detailPanel.classList.add("is-changing");
        detailTransitionTimer = window.setTimeout(function () {
            renderDetail(stop, index);
            detailPanel.classList.remove("is-changing");
        }, 190);
    }

    function buildInfoWindow(stop) {
        return `
            <div class="map-info-card">
                <span>${stop.code}</span>
                <h3>${stop.title}</h3>
                <small>${stop.realAddress || stop.address}</small>
                <p>${stop.description}</p>
            </div>
        `;
    }

    function selectStop(index, openPopup) {
        const stop = practiceStops[index];

        updateDetail(index);

        if (!map || !AMapInstance) {
            return;
        }

        if (activeFilter !== "全部" && activeFilter !== stop.city) {
            setFilter("全部", false);
        }

        map.setZoomAndCenter(stop.city === "宁波" ? 13 : 12, stop.position, false);

        if (openPopup && infoWindow) {
            infoWindow.setContent(buildInfoWindow(stop));
            infoWindow.open(map, stop.position);
        }
    }

    function visibleStopIndices(filter) {
        return practiceStops
            .map(function (stop, index) {
                return filter === "全部" || stop.city === filter ? index : -1;
            })
            .filter(function (index) {
                return index !== -1;
            });
    }

    function setFilter(filter, updateSelection) {
        const shouldUpdateSelection = updateSelection !== false;
        const visibleIndices = visibleStopIndices(filter);

        activeFilter = filter;

        document.querySelectorAll(".filter-button").forEach(function (button) {
            const isActive = button.dataset.filter === filter;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        document.querySelectorAll(".timeline-item").forEach(function (element) {
            element.hidden = filter !== "全部" && element.dataset.city !== filter;
        });

        const visibleMarkers = [];

        markers.forEach(function (marker, index) {
            const isVisible = visibleIndices.indexOf(index) !== -1;

            if (isVisible) {
                marker.show();
                visibleMarkers.push(marker);
            } else {
                marker.hide();
            }
        });

        if (routeShanghai) {
            filter === "宁波" ? routeShanghai.hide() : routeShanghai.show();
        }

        if (routeNingbo) {
            filter === "上海" ? routeNingbo.hide() : routeNingbo.show();
        }

        if (routeIntercity) {
            filter === "全部" ? routeIntercity.show() : routeIntercity.hide();
        }

        if (infoWindow) {
            infoWindow.close();
        }

        if (shouldUpdateSelection && visibleIndices.length) {
            updateDetail(visibleIndices[0]);
        }

        if (map && visibleMarkers.length) {
            map.setFitView(visibleMarkers, false, [70, 70, 70, 70], filter === "全部" ? 9 : 13);
        }
    }

    function resolvePOI(AMap, stop) {
        stop.position = stop.fallback.slice();

        return new Promise(function (resolve) {
            try {
                const search = new AMap.PlaceSearch({
                    city: stop.city,
                    citylimit: true,
                    pageSize: 10,
                    pageIndex: 1,
                    extensions: "base"
                });

                search.search(stop.keyword, function (status, result) {
                    try {
                        const pois =
                            status === "complete" &&
                            result &&
                            result.poiList &&
                            result.poiList.pois
                                ? result.poiList.pois
                                : [];

                        if (pois.length) {
                            const exactMatch = pois.find(function (poi) {
                                return poi.name.indexOf(stop.title) !== -1 || stop.title.indexOf(poi.name) !== -1;
                            });
                            const poi = exactMatch || pois[0];

                            if (poi.location) {
                                stop.position = [poi.location.lng, poi.location.lat];
                            }

                            if (poi.address) {
                                stop.realAddress = poi.address;
                            }
                        }
                    } catch (error) {
                        console.warn("地点信息处理失败：", stop.title, error);
                    }

                    resolve(stop);
                });
            } catch (error) {
                console.warn("地点搜索不可用，使用备用坐标：", stop.title, error);
                resolve(stop);
            }
        });
    }

    function createMarker(AMap, stop, index) {
        const element = document.createElement("div");
        const marker = new AMap.Marker({
            position: stop.position,
            content: element,
            anchor: "bottom-center",
            zIndex: 120
        });

        element.className = "practice-marker";
        element.innerHTML = `
            <span class="marker-number">${String(stop.id).padStart(2, "0")}</span>
            <span class="marker-label">${stop.title}</span>
        `;

        marker.domElement = element;
        marker.on("click", function () {
            selectStop(index, true);
        });

        return marker;
    }

    function createRoutes(AMap) {
        const shanghaiPath = practiceStops
            .filter(function (stop) { return stop.city === "上海"; })
            .map(function (stop) { return stop.position; });
        const ningboPath = practiceStops
            .filter(function (stop) { return stop.city === "宁波"; })
            .map(function (stop) { return stop.position; });
        const sharedOptions = {
            strokeColor: "#0f6ba5",
            strokeWeight: 5,
            strokeOpacity: 0.82,
            showDir: true,
            lineJoin: "round",
            zIndex: 60
        };

        routeShanghai = new AMap.Polyline(Object.assign({ path: shanghaiPath }, sharedOptions));
        routeNingbo = new AMap.Polyline(Object.assign({ path: ningboPath }, sharedOptions));
        routeIntercity = new AMap.Polyline({
            path: [practiceStops[2].position, practiceStops[3].position],
            strokeColor: "#7493aa",
            strokeWeight: 4,
            strokeOpacity: 0.72,
            strokeStyle: "dashed",
            showDir: true,
            zIndex: 50
        });

        map.add([routeShanghai, routeNingbo, routeIntercity]);
    }

    async function initMap() {
        try {
            if (typeof AMapLoader === "undefined") {
                throw new Error("高德地图加载器不可用");
            }

            AMapInstance = await AMapLoader.load({
                key: AMAP_KEY,
                version: "2.0",
                plugins: ["AMap.ToolBar", "AMap.Scale", "AMap.PlaceSearch"]
            });

            const AMap = AMapInstance;

            map = new AMap.Map("practiceMap", {
                viewMode: "2D",
                zoom: 8,
                center: [121.58, 30.50],
                mapStyle: "amap://styles/whitesmoke",
                resizeEnable: true
            });

            map.addControl(new AMap.ToolBar({ position: "RB" }));
            map.addControl(new AMap.Scale());
            infoWindow = new AMap.InfoWindow({
                autoMove: true,
                offset: new AMap.Pixel(0, -35)
            });

            await Promise.all(practiceStops.map(function (stop) {
                return resolvePOI(AMap, stop);
            }));

            markers = practiceStops.map(function (stop, index) {
                return createMarker(AMap, stop, index);
            });

            map.add(markers);
            createRoutes(AMap);
            map.setFitView(
                markers.concat([routeShanghai, routeNingbo, routeIntercity]),
                false,
                [70, 70, 70, 70],
                9
            );
            updateDetail(0);
        } catch (error) {
            console.error("高德地图加载失败：", error);
            mapError.classList.add("is-visible");
            mapErrorText.textContent = "地图暂时无法加载，请检查网络连接。下方十站选择器与地点详情仍可正常浏览。";
        }
    }

    document.getElementById("prevStop").addEventListener("click", function () {
        const indices = visibleStopIndices(activeFilter);
        const currentPosition = indices.indexOf(activeIndex);
        const nextPosition = currentPosition <= 0 ? indices.length - 1 : currentPosition - 1;

        selectStop(indices[nextPosition], true);
    });

    document.getElementById("nextStop").addEventListener("click", function () {
        const indices = visibleStopIndices(activeFilter);
        const currentPosition = indices.indexOf(activeIndex);
        const nextPosition = currentPosition === indices.length - 1 ? 0 : currentPosition + 1;

        selectStop(indices[nextPosition], true);
    });

    document.querySelectorAll(".filter-button").forEach(function (button) {
        button.addEventListener("click", function () {
            setFilter(button.dataset.filter);
        });
    });

    renderTimeline();
    updateDetail(0);
    initMap();
})();
