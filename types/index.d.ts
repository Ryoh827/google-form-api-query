declare namespace GoogleFormAPI {
  type RequireOne<T, K extends keyof T = keyof T> = K extends keyof T
    ? PartialRequire<T, K>
    : never;

  type PartialRequire<O, K extends keyof O> = {
    [P in K]-?: O[P];
  } &
    O;

  export type Form = {
    formId?: string;
    info: Info;
    settings?: {
      FormSettings;
    };
    items: Array<Item>;
    revisionId?: string;
    responderUri?: string;
  };

  export type Info = {
    title: string;
    documentTitle?: string;
    description?: string;
  };

  export type FormSettings = {
    quizSettings?: QuizSettings;
  };

  export type QuizSettings = {
    isQuiz?: boolean;
  };

  export type Item = RequireOne<
    {
      itemId?: string;
      title?: string;
      description?: string;

      questionItem?: QuestionItem;
      questionGroupItem?: QuestionGroupItem;
      pageBreakItem?: PageBreakItem;
      textItem?: TextItem;
      imageItem?: ImageItem;
      videoItem?: VideoItem;
    },
    | 'questionItem'
    | 'questionGroupItem'
    | 'pageBreakItem'
    | 'textItem'
    | 'imageItem'
    | 'videoItem'
  >;

  export type ItemQuestion = {};

  export type QuestionItem = {
    question: Question;
    image?: Image;
  };

  export type Question = RequireOne<
    {
      questionId?: string;
      required?: boolean;
      grading?: Grading;

      choiceQuestion?: ChoiceQuestion;
      textQuestion?: TextQuestion;
      scaleQuestion?: ScaleQuestion;
      dateQuestion?: DateQuestion;
      timeQuestion?: TimeQuestion;
      fileUploadQuestion?: FileUploadQuestion;
      rowQuestion?: RowQuestion;
    },
    | 'choiceQuestion'
    | 'textQuestion'
    | 'scaleQuestion'
    | 'dateQuestion'
    | 'timeQuestion'
    | 'fileUploadQuestion'
    | 'rowQuestion'
  >;

  export type ChoiceQuestion = {
    type: ChoiceType;
    options: Array<Option>;
    shuffle?: boolean;
  };

  export type ChoiceType =
    | 'CHOICE_TYPE_UNSPECIFIED'
    | 'RADIO'
    | 'CHECKBOX'
    | 'DROP_DOWN';

  export type Option = RequireOne<
    {
      value: string;
      image?: Image;
      isOther?: boolean;

      goToAction?: GoToAction;
      goToSectionId?: string;
    },
    'goToAction' | 'goToSectionId'
  >;

  export type GoToAction =
    | 'GO_TO_ACTION_UNSPECIFIED'
    | 'NEXT_SECTION'
    | 'RESTART_FORM'
    | 'SUBMIT_FORM';

  export type Image = {
    contentUri?: string;
    altText?: string;
    properties?: MediaProperties;
    sourceUri?: string;
  };

  export type MediaProperties = {
    alignment?: Alignment;
  };

  export type Alignment = 'ALIGNMENT_UNSPECIFIED' | 'LEFT' | 'RIGHT' | 'CENTER';

  export type TextQuestion = {
    paragraph?: boolean;
  };

  export type ScaleQuestion = {
    low: number;
    high: number;
    lowLabel?: string;
    highLabel?: string;
  };

  export type DateQuestion = {
    includeTime?: boolean;
    includeYear?: boolean;
  };

  export type TimeQuestion = {
    duration?: boolean;
  };

  export type FileUploadQuestion = {
    folderId: string;
    types?: Array<FileType>;
    maxFiles?: number;
    maxFileSize?: string;
  };

  export type FileType =
    | 'FILE_TYPE_UNSPECIFIED'
    | 'ANY'
    | 'DOCUMENT'
    | 'PRESENTATION'
    | 'SPREADSHEET'
    | 'DRAWING'
    | 'PDF'
    | 'IMAGE'
    | 'VIDEO'
    | 'AUDIO';

  export type RowQuestion = {
    title: string;
  };

  export type Grading = {
    pointValue: integer;
    correctAnswers: CorrectAnswers;
    whenRight?: Feedback;
    whenWrong?: Feedback;
    generalFeedback?: Feedback;
  };

  export type CorrectAnswers = {
    answers?: Array<CorrectAnswer>;
  };

  export type CorrectAnswer = {
    value: string;
  };

  export type QuestionGroupItem = {
    questions: Array<Question>;
    image?: Image;
    grid?: Grid;
  };

  export type Grid = {
    columns: ChoiceQuestion;
    shuffleQuestions?: boolean;
  };

  export type PageBreakItem = {};

  export type TextItem = {};

  export type ImageItem = {
    image: Image;
  };

  export type VideoItem = {
    video: Video;
    caption?: string;
  };

  export type Video = {
    youtubeUri: string;
    properties?: MediaProperties;
  };

  export type Feedback = {
    text: string;
    material?: Array<ExtraMaterial>;
  };

  export type ExtraMaterial = {
    link?: TextLink;
    video?: VideoLink;
  };

  export type TextLink = {
    uri: string;
    displayText: string;
  };

  export type VideoLink = {
    displayText: string;
    youtubeUri?: string;
  };

  export type RequestBody = {
    includeFormInResponse?: boolean;
    requests: Array<Request>;
    writeControl?: WriteControl;
  };

  export type WriteControl = RequireOne<{
    requiredRevisionId?: string;
    targetRevisionId?: string;
  }>;

  export type Request = RequireOne<{
    updateFormInfo?: UpdateFormInfoRequest;
    updateSettings?: UpdateSettingsRequest;
    createItem?: CreateItemRequest;
    moveItem?: MoveItemRequest;
    deleteItem?: DeleteItemRequest;
    updateItem?: UpdateItemRequest;
  }>;

  export type UpdateFormInfoRequest = {
    info?: Info;
    updateMask: string;
  };

  export type UpdateSettingsRequest = {
    settings: FormSettings;
    updateMask: string;
  };

  export type CreateItemRequest = {
    item: Item;
    location: Location;
  };

  export type MoveItemRequest = {
    originalLocation: Location;
    newLocation: Location;
  };

  export type DeleteItemRequest = {
    location: Location;
  };

  export type UpdateItemRequest = {
    item: Item;
    location: Location;
    updateMask: string;
  };
}
