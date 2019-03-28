import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Dropdown');
  require('../stories/StudentRow');
  require('../stories/ModelPopup');
  require('../stories/StudentList');
  require('../stories/CreateStudentForm');
  require('../stories/StudentEditForm');
  require('../stories/StudentDetailsForm');
  require('../stories/DeleteStudentForm');
}

configure(loadStories, module);