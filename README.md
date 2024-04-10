
## YouTube-GIF-Generator

This project details a Youtube GIF Maker built with Next.js, Node.js, and RabbitMQ.

**Full details:** [https://brandnolandev.com](https://brandnolandev.com/projects/66170b1fb9a84beea9458d4c)

**Local Setup**

1. Rename `.env.example` to `.env`.
2. Fill in missing environment variables in `node-worker` (especially Google Cloud Storage secrets).
3. **With Docker:** Ensure Docker and Docker Compose are installed. Run `docker-compose up -d --build`.
4. **Without Docker:** Install MongoDB and RabbitMQ. In each project folder, run `npm run dev`.
5. Open http://localhost:3000 in your browser.

**Overview**

This application allows users to create GIFs from YouTube videos. Users specify the video URL and desired start/end times for the GIF.

**App Functionalities**

* Create GIFs from YouTube videos with specified start/end times.
* Preview the result before conversion.

**System Design**

The system is comprised of independent components that communicate with each other:

* **React (Next.js) Client:** Manages user interaction, communicates with the backend server to create GIF requests, and retrieves information about existing conversions.
* **Node Backend Server:** Handles client requests and dispatches new conversion jobs to the message broker.
* **Node Service Worker:** Executes and processes conversion jobs.
* **RabbitMQ Message Broker:** Acts as a task queue for the backend server to submit jobs and the service worker to consume them.
* **MongoDB Datastore:** Stores information about GIF conversion jobs.
* **Google Cloud Storage:** Stores the converted GIFs.
