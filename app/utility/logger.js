import Bugsnag from "@bugsnag/expo";

const log = (error) => Bugsnag.notify(console.error);

const start = () => Bugsnag.start();

export default { log, start };
