import clsx from 'clsx';

export const MapPropsToStyles = (styles, className) => {
  if (className) {
    let classArr = className.split(' ');
    let classNames = [];
    classArr.map((c) => {
      if (styles[c]) {
        classNames.push(styles[c]);
      }
    });

    return clsx(classNames);
  } else {
    return '';
  }
};
