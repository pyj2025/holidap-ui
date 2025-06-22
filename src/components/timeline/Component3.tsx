const Component3 = () => (
  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
    <h2 className="text-2xl font-bold text-purple-700 mb-3">컴포넌트 3</h2>
    <p className="text-gray-700">마지막 단계입니다. 모든 작업이 완료되었습니다!</p>
    <div className="mt-4 flex items-center justify-center bg-white p-6 rounded shadow-sm">
      <div className="text-center">
        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-purple-700 font-semibold">완료!</div>
      </div>
    </div>
  </div>
);

export default Component3;
