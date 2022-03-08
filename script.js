if ('serviceWorker' in navigator) {

  // REGISTER SERVICE WORKER

  navigator.serviceWorker.register('./service-worker.js')
    .then(registration => {
      console.log(registration);
    })
    .catch(err => {
      console.log(err);
    });

  // UNREGISTER SERVICE WORKER

  // navigator.serviceWorker.getRegistrations()
  //   .then((registrations) => {
  //     for (registration of registrations) {
  //       registration.unregister()
  //         .then(unregistered => console.log(unregistered));
  //     }
  //   })
}