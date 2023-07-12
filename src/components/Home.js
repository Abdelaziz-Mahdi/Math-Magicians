function Home() {
  const style = {
    flexDirection: 'column',
    justifyContent: 'center',
    fontWeight: 'bold',
    display: 'flex',
    padding: '1rem',
  };
  return (
    <>
      <div style={style}>
        <h2>Welcome to Math Magicians!</h2>
        <p>
          Math is a broad subject that encompasses many different areas,
          including arithmetic, algebra, geometry, trigonometry, calculus, and
          statistics. It is a fundamental skill that is essential for many
          different careers and everyday tasks. Calculators are tools that can
          be used to perform mathematical calculations. They can be used to
          solve simple problems, such as addition and subtraction, or more
          complex problems, such as calculus equations.
        </p>
        <p>
          Calculators can be a helpful tool for students and professionals
          alike. They can help students learn math concepts by providing them
          with immediate feedback on their answers. They can also help
          professionals save time and effort by performing calculations quickly
          and accurately.
        </p>
        <p>
          However, it is important to remember that calculators are not a
          substitute for understanding math concepts. Students should still
          practice solving math problems by hand, as this will help them develop
          their problem-solving skills. Additionally, professionals should
          always check the accuracy of their calculator results by hand.
        </p>
      </div>
    </>
  );
}
export default Home;
