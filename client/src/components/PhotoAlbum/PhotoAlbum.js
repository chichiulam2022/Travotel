const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
    //brazil
    { id: "7F65HDP0-E0", width: 6000, height: 4000 },
    //japan
    { id: "SBK40fdKbAg", width: 6749, height: 5203 },
    //paris
    { id: "WSvth_lwCi0", width: 4160, height: 6240 },
    { id: "Yizrl9N_eDA", width: 1080, height: 721 },
    //rome
    { id: "iek_zWEB0Fw", width: 3648, height: 5472 },
    //india
    { id: "EpAq2EE-shg", width: 1535, height: 2048 },
    //bangkok
    { id: "B64B6-kAWlw", width: 7744, height: 5809 },
    //jamaica
    { id: "wGyHvtLcW_U", width: 6720, height: 4480 },
    { id: "twukN12EN7c", width: 1080, height: 694 },
];

const photos = unsplashPhotos.map((photo) => ({
    src: unsplashLink(photo.id, photo.width, photo.height),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: unsplashLink(photo.id, breakpoint, height),
            width: breakpoint,
            height,
        };
    }),
}));

export default photos;
