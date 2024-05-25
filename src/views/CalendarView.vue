<script setup lang="ts">
import { ScheduleXCalendar } from "@schedule-x/vue";
import {
  createCalendar,
  viewDay,
  viewWeek,
  viewMonthGrid,
  viewMonthAgenda,
} from "@schedule-x/calendar";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "@schedule-x/theme-default/dist/index.css";

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar({
  selectedDate: "2023-12-19",
  views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
  defaultView: viewWeek.name,
  events: [
    {
      id: 1,
      title: "Event 1",
      start: "2023-12-19",
      end: "2023-12-19",
    },
    {
      id: 2,
      title: "Event 2",
      start: "2023-12-20 12:00",
      end: "2023-12-20 13:00",
    },
  ],
  calendars: {
    leisure: {
      colorName: "leisure",
      lightColors: {
        main: "#1c7df9",
        container: "#d2e7ff",
        onContainer: "#002859",
      },
      darkColors: {
        main: "#c0dfff",
        onContainer: "#dee6ff",
        container: "#426aa2",
      },
    },
  },
  plugins: [createDragAndDropPlugin(), createEventModalPlugin()],
});
</script>

<template>
  <div>
    <ScheduleXCalendar :calendar-app="calendarApp" />
  </div>
</template>
