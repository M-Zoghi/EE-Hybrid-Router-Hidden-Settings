// ==UserScript==
// @name         EE Hybrid Router Hidden Settings
// @namespace    https://github.com/M-Zoghi/EE-Hybrid-Router-Hidden-Settings
// @version      0.1
// @description  Adds Hidden Menus to EE Hybrid Router
// @author       M-Zoghi
// @match        http*://192.168.1.1/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var advancedSettingsMenuItem = document.getElementById('menu_Advanced');

    var ulElement = document.createElement('ul');

    ulElement.innerHTML = `
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_service_adsl.htm");'>ADSL Settings</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_service_vdsl.htm");'>VDSL Settings</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_service_lte.htm");'>LTE Settings</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_service_eth.htm");'>WAN Settings</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_service.htm");'>Advanced Internet</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_layer2.htm\");'>Layer 2 Interface</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_failover.htm\");'>FailOver</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_lte_pin.htm\");'>LTE Pin</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_sms.htm\");'>SMS</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_port_mapping.htm\");'>Port Mapping</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/setup/sp_time.htm\");'>Time and Date</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/maintenance/mt_test.htm?5,0\");'>Diagnostic Test</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/maintenance/mt_stat.htm\");'>Statistics</a></li>
    `;

    advancedSettingsMenuItem.parentNode.appendChild(ulElement);
})();

(function() {
    'use strict';

    var managmentSettingsMenuItem = document.getElementById('menu_Management');

    var ulElement = document.createElement('ul');

    ulElement.innerHTML = `
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_dlna.htm\");'>DLNA</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_vpn.htm\");'>VPN</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_traffic.htm\");'>Traffic Capture</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_mirror.htm\");'>WAN Mirror</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_iperf.htm\");'>Iperf</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_dns.htm\");'>DNS</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_applications.htm\");'>Applications</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_dmz.htm\");'>DMZ (Exposed Host)</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_parental_control.htm\");'>Parental Control</a></li>
    <li><a onclick='adv_warning(\"ad_ipv6_firewall.htm\")' href='###'>IPv6 Firewall</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_rip.htm\");'>RIP</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_igmp.htm\");'>IGMP Proxy</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_qos.htm\");'>QoS</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_qos_cls.htm\");'>QoS Classification</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_dhcp.htm\");'>DHCP Server</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_relay.htm\");'>DHCP Relay</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_wps.htm\");'>Wi-Fi Protected Setup 2.4 GHz</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_wp5g.htm\");'>Wi-Fi Protected Setup 5 GHz</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_wlan_performance.htm\");'>WLAN Performance 2.4 GHz</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_wlan_perf_5g.htm\");'>WLAN Performance 5 GHz</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_wlan_access.htm\");'>WLAN MAC Filter</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_routing.htm\");'>Routing</a></li>
    <li><a href='javascript:CheckHTMLStatus(\"/advanced/ad_upnp.htm\");'>UPnP</a></li>
    `;

    managmentSettingsMenuItem.parentNode.appendChild(ulElement);
})();