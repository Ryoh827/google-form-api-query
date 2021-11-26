declare module GoogleFormAPI {
  export type Form = {
    formId?: string;
    info?: Info;
    settings?: {
      FormSettings;
    };
    items?: Array<Item>;
    revisionId?: string;
    responderUri?: string;
  };

  export type Info = {
    title?: string;
    documentTitle?: string;
    description?: string;
  };

  export type FormSettings = {
    quizSettings?: QuizSettings;
  };

  export type QuizSettings = {
    isQuiz?: boolean;
  };

  export type Item = {
    itemId?: string;
    title?: string;
    description?: string;

    questionItem?: QuestionItem;
    questionGroupItem?: QuestionGroupItem;
    pageBreakItem?: PageBreakItem;
    textItem?: TextItem;
    imageItem?: ImageItem;
    videoItem?: VideoItem;
  };

  export type QuestionItem = {
    question?: Question;
    image?: Image;
  };

  export type Question = {
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
  };

  export type ChoiceQuestion = {
    type?: ChoiceType;
    options?: Array<Option>;
    shuffle?: boolean;
  };

  export type ChoiceType =
    | 'CHOICE_TYPE_UNSPECIFIED'
    | 'RADIO'
    | 'CHECKBOX'
    | 'DROP_DOWN';

  export type Option = {
    value?: string;
    image?: Image;
    isOther?: boolean;

    goToAction?: GoToAction;
    goToSectionId?: string;
  };

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
    low?: number;
    high?: number;
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
    folderId?: string;
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
    title?: string;
  };

  export type Grading = {
    pointValue?: integer;
    correctAnswers?: CorrectAnswers;
    whenRight?: Feedback;
    whenWrong?: Feedback;
    generalFeedback?: Feedback;
  };

  export type CorrectAnswers = {
    answers?: Array<CorrectAnswer>;
  };

  export type CorrectAnswer = {
    value?: string;
  };

  export type QuestionGroupItem = {
    questions?: Array<Question>;
    image?: Image;
    grid?: Grid;
  };

  export type Grid = {
    columns?: ChoiceQuestion;
    shuffleQuestions?: boolean;
  };

  export type PageBreakItem = {};

  export type TextItem = {};

  export type ImageItem = {
    image?: Image;
  };

  export type VideoItem = {
    video?: Video;
    caption?: string;
  };

  export type Video = {
    youtubeUri?: string;
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
}
