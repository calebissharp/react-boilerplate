import React from 'react'

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools'

// Monitors are separate packages, and you can make a custom one
import DiffMonitor from 'redux-devtools-diff-monitor'
import Dispatch from 'redux-devtools-dispatch'
import DockMonitor from 'redux-devtools-dock-monitor'

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <DockMonitor toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    defaultIsVisible
    changeMonitorKey='ctrl-alt-c'>
    <Dispatch />
    <DiffMonitor />
  </DockMonitor>
)

export default DevTools
