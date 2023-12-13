export function loadingDetector(callback) {
    window.addEventListener('load', callback)
    return () => {
        window.addEventListener('load', callback)
    }
}