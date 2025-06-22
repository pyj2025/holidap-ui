const Component2 = () => (
  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
    <h2 className="text-2xl font-bold text-green-700 mb-3">컴포넌트 2</h2>
    <p className="text-gray-700">두 번째 단계의 내용입니다. 진행 상황을 확인해보세요.</p>
    <div className="mt-4 grid grid-cols-2 gap-4">
      <div className="bg-white p-3 rounded shadow-sm">
        <div className="text-sm text-gray-500">진행률</div>
        <div className="text-xl font-bold text-green-600">65%</div>
      </div>
      <div className="bg-white p-3 rounded shadow-sm">
        <div className="text-sm text-gray-500">상태</div>
        <div className="text-xl font-bold text-green-600">진행중</div>
      </div>
    </div>
  </div>
);

export default Component2;
