const RowHeight = {
     data() {
          return {};
     },

     methods: {
          calculateRowHeight(target) {
               let resultHeight = 0;

               let targetElement = document.querySelector(target);
               if (targetElement.children.length === 0) {
                    return;
               }

               targetElement.children.forEach((child) => {
                    resultHeight += child.offsetHeight;
               });

               targetElement.style.height = `${resultHeight}px`;
          },
     },
};

export default RowHeight;
