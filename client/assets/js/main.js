import { initLandingpage } from "./landingpage/landingpage.js"
import { initDashboard } from "./dashboard/dashboard.js"

document.addEventListener('DOMContentLoaded', ()=>{
    const page = document.body.id
    if (page == 'landingpage') {
        initLandingpage()
    } else if (page == 'dashboard') {
        initDashboard()
    }
})