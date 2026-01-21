const MainContent = () => {
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#eef2f7',
        minHeight: '300px',
        textAlign: 'center'
      }}
    >
      <h2 style={{ color: '#333', marginBottom: '15px' }}>
        Welcome to My Travel Page
      </h2>

      <p
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
          color: '#555'
        }}
      >
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
};

export default MainContent;
