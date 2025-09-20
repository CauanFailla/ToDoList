import { updateHeader } from '../ui/updateDashboard.js'
import { initTask } from './task.js'
import { initWorkspace } from '../ui/workspaces.js'

export async function initDashboard() {
    updateHeader()
    initWorkspace()
    initTask()
}