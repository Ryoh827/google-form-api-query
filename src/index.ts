import { GoogleFormAPI } from './@types/index';

(() => {
  // const form: GoogleFormAPI.Form = {
  //   info: {
  //     title: 'title',
  //   },
  //   items: [],
  // };

  const request: GoogleFormAPI.RequestBody = {
    requests: [
      {
        createItem: {
          item: {
            title: 'ID',
            description: '変更しないでください',
            questionItem: {
              question: {
                required: true,
                textQuestion: {
                  paragraph: false,
                },
              },
            },
          },
          location: {
            index: 0,
          },
        },
      },
      // 出社日数
      {
        createItem: {
          item: {
            title: '今週はオフィスに何度出社しましたか',
            description: '以下のいずれかから選択してください',
            questionItem: {
              question: {
                required: true,
                choiceQuestion: {
                  type: 'DROP_DOWN',
                  options: [
                    { value: '0' },
                    { value: '1' },
                    { value: '2' },
                    { value: '3' },
                    { value: '4' },
                    { value: '5' },
                  ],
                },
              },
            },
          },
          location: {
            index: 1,
          },
        },
      },
      // 自己評価
      {
        createItem: {
          item: {
            title: '今週の体調はよかったですか。',
            description: '以下のいずれかから選択してください。',
            questionItem: {
              question: {
                required: true,
                choiceQuestion: {
                  type: 'RADIO',
                  options: [{ value: 'はい' }, { value: 'いいえ' }],
                },
              },
            },
          },
          location: {
            index: 2,
          },
        },
      },

      {
        createItem: {
          item: {
            title: '「いいえ」と答えた場合に回答ください',
            description: '具体的な症状を記入してください',
            questionItem: {
              question: {
                required: false,
                textQuestion: {
                  paragraph: false,
                },
              },
            },
          },
          location: {
            index: 3,
          },
        },
      },

      // 他者評価
      {
        createItem: {
          item: {
            title: '今週どこかで社内の体調が悪そうな人と対面しましたか？',
            description: '以下のいずれかから選択してください',
            questionItem: {
              question: {
                required: true,
                choiceQuestion: {
                  type: 'RADIO',
                  options: [{ value: 'はい' }, { value: 'いいえ' }],
                },
              },
            },
          },
          location: {
            index: 4,
          },
        },
      },

      {
        createItem: {
          item: {
            title: '「はい」と回答した方のみ記入してください',
            description: '可能であればその人の名前を記入してください',
            questionItem: {
              question: {
                required: false,
                textQuestion: {
                  paragraph: false,
                },
              },
            },
          },
          location: {
            index: 5,
          },
        },
      },
    ],
  };

  const request2: GoogleFormAPI.RequestBody = {
    requests: [
      {
        updateFormInfo: {
          info: {
            title: 'あああああああ',
            description: '',
          },
          updateMask: 'title,description',
        },
      },
    ],
  };
  console.log(JSON.stringify(request2));
})();
