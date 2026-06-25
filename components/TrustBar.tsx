import FadeIn from './FadeIn';

const items = [
  { icon: 'fas fa-shipping-fast', title: 'Free Installation', sub: 'Pan Sambalpur' },
  { icon: 'fas fa-headset', title: '24/7 Support', sub: 'Call us anytime' },
  { icon: 'fas fa-shield-alt', title: '1 Year Warranty', sub: 'All products' },
  { icon: 'fas fa-award', title: 'Authorized Dealer', sub: '100% genuine' },
  { icon: 'fas fa-tools', title: 'AMC Services', sub: 'Affordable plans' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        {items.map((item, i) => (
          <>
            {i > 0 && <div className="trust-divider" key={`div-${i}`}></div>}
            <FadeIn key={item.title}>
              <div className="trust-item">
                <div className="trust-icon"><i className={item.icon}></i></div>
                <div className="trust-text">
                  <strong>{item.title}</strong>
                  <span>{item.sub}</span>
                </div>
              </div>
            </FadeIn>
          </>
        ))}
      </div>
    </div>
  );
}
