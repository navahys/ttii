'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "86d5c8a8bf3e8a8789cb9e9127e4928c",
"assets/AssetManifest.bin.json": "b01837bfdde0f6be2ade4effdf0959b9",
"assets/AssetManifest.json": "a77533a52ac3788c6b62ce8aa6e524d0",
"assets/assets/fonts/Pretendard-Black.ttf": "51c73880d5964b36e6373b3fe31f3058",
"assets/assets/fonts/Pretendard-Bold.ttf": "dfb614ebecd405875f50a918ca11c17c",
"assets/assets/fonts/Pretendard-ExtraBold.ttf": "332e9b673b0c1709e93fee01e4543f1d",
"assets/assets/fonts/Pretendard-ExtraLight.ttf": "2f39a307ce00aa5e734137d4cee3b5c1",
"assets/assets/fonts/Pretendard-Light.ttf": "77ecd2ca94928e38ff7c68bb255324f7",
"assets/assets/fonts/Pretendard-Medium.ttf": "7305f90c923d4409825ec2f4380b63d6",
"assets/assets/fonts/Pretendard-Regular.ttf": "d6e0de06bff8b7fda2db4682168e3ddf",
"assets/assets/fonts/Pretendard-SemiBold.ttf": "459eff7ba5380583ccd6eda49c846c85",
"assets/assets/fonts/Pretendard-Thin.ttf": "8b65a9299b173e635e6acac200e80257",
"assets/assets/icons/buddy/bulb_off.svg": "899b4ddb03ebe27fe3acdc7890cdf353",
"assets/assets/icons/buddy/Calendar.svg": "a2315282349171f998235dc8a976dd1b",
"assets/assets/icons/buddy/Caret_Down_MD.svg": "f9a841a11369db4eb124c12b87339bd4",
"assets/assets/icons/buddy/empty_bottle.svg": "450b4d85440d4ae4c407b384798af49f",
"assets/assets/icons/buddy/full_bottle.svg": "418ec78c73d047636b9f90519ce36b9e",
"assets/assets/icons/buddy/half_bottle.svg": "302463bcde1743762757eb9429f373c3",
"assets/assets/icons/buddy/Handbag.svg": "e1eed0c3ebc60c42d3202f74fd013f32",
"assets/assets/icons/buddy/icon_cancel.svg": "aaa14220c0da0572ea24317e0c708c77",
"assets/assets/icons/buddy/icon_water.svg": "20df1fab7179989b6361a5dea065ecad",
"assets/assets/icons/buddy/light_off.svg": "3776142cd3e1654d1755bb3f272a1678",
"assets/assets/icons/buddy/light_on.svg": "e52452e4076a02daeced4768dd9dac27",
"assets/assets/icons/buddy/Slider_02.svg": "7376484bd26c61e247f87975f2e31199",
"assets/assets/icons/buddy/temperature_off_gradient.svg": "f43bd3a2ccb1f1af73897a8601857617",
"assets/assets/icons/community/Close_MD.svg": "476c3bc14b2aef33f0e631a3cb0a694c",
"assets/assets/icons/community/Edit_Pencil_02.svg": "06773802d44ad66ab49576e4c45894ce",
"assets/assets/icons/community/hide_keyboard.svg": "15b4a480065ffae05bfa23a855f6c513",
"assets/assets/icons/community/icon_cate_advice.svg": "37b5dbae0371b6033a5900cbfbdbd84a",
"assets/assets/icons/community/icon_cate_brag.svg": "fff31d622b84efb7b02dcf760d29261f",
"assets/assets/icons/community/icon_cate_daylife.svg": "6587b688d7cb9b626520ad20a92643b9",
"assets/assets/icons/community/icon_cate_event.svg": "9e9407e55c18d0994c15b99f6123067a",
"assets/assets/icons/community/icon_cate_gatuii.svg": "4603aa95effe94d719afc433ed49c99d",
"assets/assets/icons/community/icon_cate_interior.svg": "a557ed03a03dca4697b027ce668a46b2",
"assets/assets/icons/community/icon_cate_recipe.svg": "b81061a264de4438f5c38000b8c7870e",
"assets/assets/icons/community/icon_cate_tips.svg": "a7b4be2b37ef54fa70822ec41440363a",
"assets/assets/icons/community/icon_comment.svg": "98217d5f2571790ee040d233cdc59ee2",
"assets/assets/icons/community/icon_tag.svg": "6b2736d3294f6bebd0c1ca383836eff6",
"assets/assets/icons/community/Image_02.svg": "3d1b98fbb96cb7df4f855896a015e88f",
"assets/assets/icons/functions/back.svg": "54b69f23ead05cbee77ec8f953796f42",
"assets/assets/icons/functions/Bookmark.svg": "c6cde5a87a9f2656a55961858eaca058",
"assets/assets/icons/functions/Bookmark_on.svg": "ceb5ef0d1353efe9cc5431be203e25a4",
"assets/assets/icons/functions/camera.png": "9943e0c09e4b748c756ce96aa52dfadd",
"assets/assets/icons/functions/camera.svg": "92cdfab0cfcae60055a0dd813d4fdb82",
"assets/assets/icons/functions/Caret_Down_SM.svg": "e102a25bd6ce1583fd90499d92b51fc5",
"assets/assets/icons/functions/Caret_Up_SM.svg": "5f9189d73004826faa35fc6ab6e4403e",
"assets/assets/icons/functions/Credit_Card_01.svg": "9f4997e9d99b9a7ea628ec92c15489c2",
"assets/assets/icons/functions/Edit_Pencil_01.svg": "7ae06fa03d3889472ff076b01f42a3da",
"assets/assets/icons/functions/icon_buddy.svg": "c3fd55e13116f2603140c873f6230f20",
"assets/assets/icons/functions/icon_cancel.svg": "c8a882da8a813e3e0958b1ab5749ff21",
"assets/assets/icons/functions/icon_chat.svg": "2b2b9e9429483d15a0bf6e2718910f29",
"assets/assets/icons/functions/icon_dialog.svg": "32e013dd5705988f679bacb4d0d53396",
"assets/assets/icons/functions/icon_dontshow.svg": "95ac61dd9b18138fc3e99370fcfd6cb6",
"assets/assets/icons/functions/icon_info.svg": "2419dcdf710dd881422db27e3a6db17a",
"assets/assets/icons/functions/icon_language.svg": "42a76f828860fb4710406a30c31955e5",
"assets/assets/icons/functions/icon_plus.svg": "9df40e925a1b8474b55d23495f45f9d7",
"assets/assets/icons/functions/icon_search.svg": "64ea52a6759ba9c044b321e9e420a45d",
"assets/assets/icons/functions/icon_setting.svg": "2bb3a0bb6177e50a98476105d26af3ad",
"assets/assets/icons/functions/icon_show.svg": "09b0b46aaecae4f48ee3b0e66741db2d",
"assets/assets/icons/functions/icon_trend.svg": "d7a2053f21fb51e2d19f0e459dab0862",
"assets/assets/icons/functions/light_off.svg": "7332b75c639749880920c5febba42983",
"assets/assets/icons/functions/light_on.svg": "5308a049fad7526f733810b0343acd60",
"assets/assets/icons/functions/more.svg": "4f7f143979c241b2639aedb115401ad4",
"assets/assets/icons/functions/notification_off.svg": "9d220b1e0efb6bed4bc6052c63216d73",
"assets/assets/icons/functions/notiification_on.svg": "cb6509f18a5e97f5317b61813fc1caf1",
"assets/assets/icons/functions/Paper_Plane.svg": "0139d9a127c7b14055089c30bed4b425",
"assets/assets/icons/functions/record.svg": "6a9881647367015e94a1af36e8c95625",
"assets/assets/icons/functions/temperature_off.svg": "9f89116d79fe344eadf8245d556b39ff",
"assets/assets/icons/functions/temperature_on.svg": "8307c4133e9585087e976a80f892a1df",
"assets/assets/icons/functions/Undo.svg": "88b919ea44a268925cd63604cf8d2aea",
"assets/assets/icons/functions/voice.svg": "8cfd1888c14eda2b488bf1ce92e06479",
"assets/assets/icons/navbar/home.svg": "a7a70913eadc70cad5bc09f8b9c6d58d",
"assets/assets/icons/navbar/information.svg": "53ffd7dd6557fc9c42f396906df36812",
"assets/assets/icons/navbar/leaves.svg": "808870049a9ab661abd8bbb85dbbbdaa",
"assets/assets/icons/navbar/my.svg": "5970d681d04a0a402d3cdc594d054fbe",
"assets/assets/icons/sentiment/advice.svg": "af0b84657516333d357888413232b630",
"assets/assets/icons/sentiment/happy.svg": "d1bd6fd96eccf81fd10ee14fee2e3964",
"assets/assets/icons/sentiment/negative.svg": "9b0c6370d8f317f4ca5f46bd8627915c",
"assets/assets/icons/sentiment/neutral.svg": "9e188ef88f6a5bec23e63eaba891b2d2",
"assets/assets/icons/sentiment/positive.svg": "7f352e8e8cfc2a8a5980d4e42183945f",
"assets/assets/icons/sentiment/stable.svg": "25053e46ecbf398e77c1bd609d423860",
"assets/assets/images/contents/ad_banner.png": "62822641c27d7e5381a451449fcaae63",
"assets/assets/images/contents/ad_comm.png": "9a41e9bc984c4e8daa45be0e2e4e2421",
"assets/assets/images/contents/big_tip0.png": "104162037e9d0121b98b3ca3cb5514b0",
"assets/assets/images/contents/big_tip1.png": "2216651fad4fb4681bd39e203bbe103d",
"assets/assets/images/contents/big_tip2.png": "de14d872518db0a701834e8487052de8",
"assets/assets/images/contents/big_tip3.png": "4635638071d8b881b98cc7b49d7f753c",
"assets/assets/images/contents/big_tip4.png": "3803b0e1e11139977be00f8c868b8d65",
"assets/assets/images/contents/big_tip5.png": "102c43081120976aee52c8adcef282b9",
"assets/assets/images/contents/community_post1.png": "30c32de78fb45907221a7c0702cd60c5",
"assets/assets/images/contents/community_post2.png": "c2b0ef676d6e4a67c8f136e76ec6e023",
"assets/assets/images/contents/community_post3.png": "50d5b470f7c53ad0d4dab0787c7d7727",
"assets/assets/images/contents/community_post4.png": "169592892829333f3289b10622951ff0",
"assets/assets/images/contents/community_post5.png": "ec93be6ddccebd70e21c15c3e01f3c1d",
"assets/assets/images/contents/content_image1.png": "f4911353b5f707bb45d26134ede9bc0c",
"assets/assets/images/contents/content_image2.png": "03cd7a71026ed1c6bcd0a131281b3e9c",
"assets/assets/images/contents/content_image3.png": "e91a124740081f5b7de3293b4ca3bf17",
"assets/assets/images/contents/info_image1.png": "8c51aa039f6591eb1e2be4b8cd431324",
"assets/assets/images/contents/info_image2.png": "1e348eb7b479b29dfccf1f59d6e68a32",
"assets/assets/images/contents/info_image3.png": "402e11f3cc0c99094df05e451c30ff26",
"assets/assets/images/contents/info_image4.png": "9b301ab021bed1edfa28fde363f5e57a",
"assets/assets/images/contents/plant_tip1.png": "cbb4413563a12f5a8225bf96c9ca6bb3",
"assets/assets/images/contents/plant_tip2.png": "7737bc1b79fd9853fb3568179f70033b",
"assets/assets/images/contents/plant_tip3.png": "a197d6247f437e33c7b93c771de26c16",
"assets/assets/images/contents/plant_tip4.png": "35b2a0983b1a4c73d95991d0e3a40ec7",
"assets/assets/images/dialog/meditation.png": "102c97969ff6eaf995aaeaf49cf21b70",
"assets/assets/images/dialog/music.png": "3fe0027dd1268b89841d347782f07688",
"assets/assets/images/dialog/sitting.png": "4d935fd531d0a41b33727360b40634ff",
"assets/assets/images/dialog/walking.png": "c85e5a4383b11362bf804ac3e1949584",
"assets/assets/images/diary/diary1.png": "122c9b071f7ad0d56c1f36a6cf04d2cd",
"assets/assets/images/diary/diary2.png": "6ea3fb0a29d9e6c3f10cc83227ad573e",
"assets/assets/images/diary/diary3.png": "2646705d8e8d49ce81214140cd244714",
"assets/assets/images/diary/diary_pureum1.png": "5346971c3426236eb80832c30fecd2b6",
"assets/assets/images/diary/diary_pureum2.png": "0bc9fa3ae25b4127a827f68a9685a228",
"assets/assets/images/diary/diary_pureum3.png": "9b4630c904ae4974bdfdd7fde684de51",
"assets/assets/images/display/animal.png": "f3b850500cdb55bac0487053ddc64194",
"assets/assets/images/display/display1.png": "ab27428f58de5d9daa18d838aaaf51ac",
"assets/assets/images/display/display2.png": "7ffed51131e8364c00bede2f120b8f19",
"assets/assets/images/display/display3.png": "f3b850500cdb55bac0487053ddc64194",
"assets/assets/images/display/display4.png": "8cdd82000f928827dab40fd0dafaa123",
"assets/assets/images/display/display5.png": "b6f00b51f49083a845274247ece1da00",
"assets/assets/images/display/display6.png": "089c2c97843226fa0b5c796bcba6583e",
"assets/assets/images/display/graphic1.png": "ab27428f58de5d9daa18d838aaaf51ac",
"assets/assets/images/display/graphic2.png": "4a722da0ae933bb0d65cbc305f765d90",
"assets/assets/images/display/graphic3.png": "7ffed51131e8364c00bede2f120b8f19",
"assets/assets/images/display/lock.png": "f1e6772e2b0b64265901232c66a1212f",
"assets/assets/images/display/paper1.png": "ea136c88bd85eb707bc6bfd1d70670ae",
"assets/assets/images/display/paper2.png": "c05628f99867afdf8cdf18b424caf47b",
"assets/assets/images/display/paper3.png": "b2fc329ba9f025ecc40b789e0151f587",
"assets/assets/images/display/spring1.png": "8cdd82000f928827dab40fd0dafaa123",
"assets/assets/images/display/spring2.png": "b6f00b51f49083a845274247ece1da00",
"assets/assets/images/display/spring3.png": "089c2c97843226fa0b5c796bcba6583e",
"assets/assets/images/history/history1.png": "9e2303b8d4f1f1b771479f690a561135",
"assets/assets/images/history/history2.png": "ba932b0aaddb4ab092165b5f1bcef4ce",
"assets/assets/images/history/history3.png": "04b702fe8b3fac6a0b114fb5f4a32949",
"assets/assets/images/logos/apple_logo.png": "760030562733c21c126cb61f7d7a6c7e",
"assets/assets/images/logos/google_logo.png": "9c61e08649af127ea455fda84373bea0",
"assets/assets/images/logos/illust_welcome.png": "e00e9cb3d09c48f256d5043729a01b13",
"assets/assets/images/logos/lg_logo.png": "16b04ee721b0c884a4fc8b423db04530",
"assets/assets/images/logos/tiiun_app_icon.png": "ec8d8603655ae2b6d67f1aaf9458a6c6",
"assets/assets/images/logos/tiiun_buddy_logo.svg": "d7275f316debf5c7d244228fe8e23a61",
"assets/assets/images/logos/tiiun_logo.svg": "d941c736d5b6467cd00b393da66eab53",
"assets/assets/images/mypage/chatting_bubble.png": "4b414fe10ecd3062598d753b10b5f266",
"assets/assets/images/mypage/collection1.png": "56dabaa8c5527cabccab4a1f58229cdb",
"assets/assets/images/mypage/collection2.png": "3930ad8d199a87259d55fc970839a7cb",
"assets/assets/images/mypage/collection3.png": "9f4df47f58c544307f1229a60d620f4b",
"assets/assets/images/mypage/premium_analysis.png": "6c13798a1c3405e0b70561e610b66cef",
"assets/assets/images/mypage/premium_graph.png": "01e1cdd6ab5b216993234fa7705b1344",
"assets/assets/images/mypage/premium_theme.png": "e0359a9b7dc9fa46d972a2603bebce49",
"assets/assets/images/mypage/Profile_image.svg": "0e6afaaafc045ae7fc0f387888df99e3",
"assets/assets/images/mypage/report_example.png": "dfce15d4ba6d655c2d5ba93aa69a39f4",
"assets/assets/images/mypage/type_analysis_example.png": "c529694adcda9d61832c69eac9ebf987",
"assets/assets/images/mypage/unlock.png": "a521a06511d191d111be797aa95b3e82",
"assets/assets/images/shop/image_catnip.png": "ba44b9528ee82040735733bbfd6e9907",
"assets/assets/images/shop/image_cheasong_pink.png": "32cf629e3df9b911926731043b3bdc6b",
"assets/assets/images/shop/image_cheasong_yell.png": "35e6453186573e236295d49a153fd22f",
"assets/assets/images/shop/image_deco1.png": "0c2e41a082a97ce4f85f00a86306c837",
"assets/assets/images/shop/image_deco2.png": "e7d2667f8ba4cf937b39e985a64a62ca",
"assets/assets/images/shop/image_deco3.png": "09d6bba35535530e57701c66d5dbaf90",
"assets/assets/images/shop/image_deco4.png": "1eea13db26a3fa943a28886fd9d40ae5",
"assets/assets/images/shop/image_deco5.png": "082895060cb57c4f09ee40089cffe7b5",
"assets/assets/images/shop/image_deco6.png": "e924f2390ee79c180dc44ec867428095",
"assets/assets/images/shop/image_diil.png": "5d8a6bfa73b61466abe13ca48c5e895f",
"assets/assets/images/shop/image_flower_blue.png": "a6c57a0588d1afe4c85e846514f46fc5",
"assets/assets/images/shop/image_flower_pink.png": "a4e83f11811be92aa443e5ab6d7dc351",
"assets/assets/images/shop/image_gaza.png": "16d29cd4f2d95ec834269ba653bd8866",
"assets/assets/images/shop/image_geumuh_pink.png": "dcb20a2ebf5b1083ed160d84f9367e33",
"assets/assets/images/shop/image_geumuh_yell.png": "7e922d9d2462318778669eeeb4e15b5b",
"assets/assets/images/shop/image_impha_pink.png": "816f83969b622491772077b629b144b2",
"assets/assets/images/shop/image_impha_white.png": "ea4223da546b04f05e6380677389ca02",
"assets/assets/images/shop/image_lavandula.png": "72846c2afb93e559b36e476d6ca75455",
"assets/assets/images/shop/image_pennel.png": "69b4c784e2c67b920b3291b8bbc3f5f9",
"assets/assets/images/shop/image_pureum.png": "6f2c5f429c407090daede265aecaa8aa",
"assets/assets/images/shop/image_stock_violet.png": "63c30475a550fe158fca4a8bc0642904",
"assets/assets/images/shop/image_stock_yell.png": "13096a4d507b677d4cbd9f87431c5a9f",
"assets/assets/images/shop/image_time.png": "0284488d2864a2b630cf72609f60d1d1",
"assets/assets/images/shop/image_tomato.png": "93cc0eb0e9c24ee21ae5d49ee3de6495",
"assets/assets/images/shop/supplement1.png": "a7832b7cdce7e020e1cef26aa5262190",
"assets/assets/images/shop/supplement2.png": "a79648e62bb7f5ef9b250c4b8dd3e772",
"assets/FontManifest.json": "9deae499bb4e0c605a5e60a3fe95b269",
"assets/fonts/MaterialIcons-Regular.otf": "d07c4bb90f097cb61350126bcaee5c60",
"assets/NOTICES": "be5d1cd38b30698dc19dbef8ed6c3b42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "4bcd02cf68846e7e50b4351f8bfb85b6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9ed0bce54c4b5a31c1a7678ecef17f4",
"/": "c9ed0bce54c4b5a31c1a7678ecef17f4",
"main.dart.js": "df20f6980f44dd6525ce683af4b20cdc",
"manifest.json": "83d533e5ab22a8928a684b90a19bb48d",
"netlify.toml": "ab8bc0a58705bbeb5f60d9f12694b3ae",
"version.json": "e459f9cf9a435e54e917538079a8ee38"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
