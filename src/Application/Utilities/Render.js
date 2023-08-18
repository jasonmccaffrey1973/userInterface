export const Render = ({ if: condition, children }) => {
    return (
      <>
        {(condition === undefined || condition === true) && children}
      </>
    );
  };
  