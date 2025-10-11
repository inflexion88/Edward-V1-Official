
import React from 'react';
import { useBrowserCompatibility } from '../hooks/useBrowserCompatibility';
import { AlertTriangle, Info, CheckCircle } from 'lucide-react';

const BrowserCompatibilityCheck = ({ children }: { children: React.ReactNode }) => {
  const { browserInfo, isLoading } = useBrowserCompatibility();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl mb-4">Checking browser compatibility...</p>
          <p className="text-gray-400 text-sm">Testing voice recognition, audio, and other features</p>
        </div>
      </div>
    );
  }

  if (!browserInfo?.isSupported) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white p-6">
        <div className="text-center max-w-md">
          <AlertTriangle className="mx-auto mb-4 text-red-400" size={48} />
          <h1 className="text-2xl font-bold mb-4">Browser Not Supported</h1>
          <p className="text-gray-300 mb-4">
            Your browser ({browserInfo?.name} {browserInfo?.version}) doesn't support all required features for this application.
          </p>
          <div className="text-left bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="font-semibold mb-2 text-red-300">Critical Issues:</h3>
            <ul className="space-y-1">
              {browserInfo?.issues.map((issue, index) => (
                <li key={index} className="text-red-300 text-sm">• {issue}</li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-900/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-blue-300">Recommended Browsers:</h3>
            <ul className="text-sm text-blue-200 space-y-1">
              <li>• Chrome 90+ (Recommended)</li>
              <li>• Edge 90+</li>
              <li>• Safari 14+</li>
              <li>• Firefox 100+ (Limited voice support)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Show warnings for browsers with issues but still functional
  if (browserInfo?.issues.length > 0) {
    console.warn('Browser compatibility issues detected:', browserInfo.issues);
    
    // Show a brief warning for non-critical issues
    const hasNonCriticalIssues = browserInfo.issues.some(issue => 
      issue.includes('user interaction') || 
      issue.includes('OKLCH') ||
      issue.includes('iOS Safari')
    );

    if (hasNonCriticalIssues) {
      console.log(`${browserInfo.name} ${browserInfo.version} has minor compatibility issues but will work`);
    }
  } else {
    console.log(`${browserInfo.name} ${browserInfo.version} is fully compatible`);
  }

  return <>{children}</>;
};

export default BrowserCompatibilityCheck;
