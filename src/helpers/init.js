import { isValidUUID } from "./helpers";

export function initializeParams(request, env) {
    const proxyIPs = env.PROXYIP?.split(',').map(proxyIP => proxyIP.trim());
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    panelVersion = '2.7.8';
    defaultHttpPorts = ['80', '8080', '2052', '2082', '2086', '2095', '8880'];
    defaultHttpsPorts = ['443', '8443', '2053', '2083', '2087', '2096'];
    userID = env.UUID|| '9bbc81d6-a764-4191-bea0-7c9b24a3013e';
    trojanPassword = env.TROJAN_PASS|| 'wj252310';
    proxyIP = proxyIPs ? proxyIPs[Math.floor(Math.random() * proxyIPs.length)] : 'bpb.yousef.isegaro.com';
    hostName = request.headers.get('Host');
    pathName = url.pathname;
    client = searchParams.get('app');
    urlOrigin = url.origin;
    dohURL = env.DOH_URL || 'https://cloudflare-dns.com/dns-query';
    if (pathName !== '/secrets') {
        if (typeof env.bpb !== 'object') throw new Error('KV Dataset is not properly set! Please refer to tutorials.', { cause: "init"});
        if (!userID || !trojanPassword) throw new Error(`Please set UUID and Trojan password first. Please go to 🟢 https://${hostName}/secrets 🟢 to generate them.`, { cause: "init"});
        if (userID && !isValidUUID(userID)) throw new Error(`Invalid UUID: ${userID}`, { cause: "init"});
    }
}