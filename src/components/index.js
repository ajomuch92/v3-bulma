import V3Box from './V3Box.vue';
import V3Button from './V3Button.vue';
import V3Breadcrumb from './V3Breadcrumb.vue';
import V3Card from './V3Card.vue';
import V3Delete from './V3Delete.vue';
import V3Dropdown from './V3Dropdown.vue';
import V3DropdownItem from './V3DropdownItem.vue';
import V3DropdownDivider from './V3DropdownDivider.vue';
import V3Image from './V3Image.vue';
import V3Notification from './V3Notification.vue';
import V3Progress from './V3Progress.vue';
import V3Tag from './V3Tag.vue';
import V3Tags from './V3Tags.vue';

export default {
  install: (app) => {
    app.component('V3Box', V3Box);
    app.component('V3Button', V3Button);
    app.component('V3Breadcrumb', V3Breadcrumb);
    app.component('V3Card', V3Card);
    app.component('V3Delete', V3Delete);
    app.component('V3Dropdown', V3Dropdown);
    app.component('V3DropdownItem', V3DropdownItem);
    app.component('V3DropdownDivider', V3DropdownDivider);
    app.component('V3Image', V3Image);
    app.component('V3Notification', V3Notification);
    app.component('V3Progress', V3Progress);
    app.component('V3Tag', V3Tag);
    app.component('V3Tags', V3Tags);
  },
};