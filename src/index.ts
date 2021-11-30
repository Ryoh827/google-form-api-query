import '../types/index.d.ts';

(async () => {
  const form: GoogleFormAPI.Form = {
    info: {
      title: 'title',
    },
    items: [],
  };

  const request: GoogleFormAPI.RequestBody = {
    requests: [
      {
        updateFormInfo: {
          info: {
            title: 'New Title',
          },
          updateMask: 'title',
        },
      },
    ],
  };
})();
