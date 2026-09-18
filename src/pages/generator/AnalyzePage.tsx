import React, { useState, useRef } from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { ScannerViewport } from '@/src/components/waste/ScannerViewport';
import { InferenceBanner } from '@/src/components/waste/InferenceBanner';
import { SpectralCompositionCard } from '@/src/components/waste/SpectralCompositionCard';
import { FeedstockManifestForm } from '@/src/components/waste/FeedstockManifestForm';
import { RecoveryPipelineSnippet } from '@/src/components/waste/RecoveryPipelineSnippet';
import { AnalyzeActionButtons } from '@/src/components/waste/AnalyzeActionButtons';
import { DEMO_CURRENT_ANALYSIS, DEMO_CURRENT_LISTING } from '@/src/data/demo';

export const AnalyzePage: React.FC = () => {
  const [quantity, setQuantity] = useState(String(DEMO_CURRENT_LISTING.quantity));
  const [grade, setGrade] = useState(DEMO_CURRENT_LISTING.quality);
  const [frequency, setFrequency] = useState<string>(DEMO_CURRENT_LISTING.generation_frequency);
  const [originNode, setOriginNode] = useState(DEMO_CURRENT_LISTING.location);

  const quantityInputRef = useRef<HTMLInputElement | null>(null);

  const handleOverrideClick = () => {
    if (quantityInputRef.current) {
      quantityInputRef.current.focus();
      quantityInputRef.current.select();
    }
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-6 gap-6 max-w-4xl mx-auto">
      {/* Header Title Hub */}
      <PageHeader
        nodeTag="Plant: Pune Manufacturing Facility 04"
        statusTag="Optical & Spectral Sensor Active"
        title="Industrial Waste Stream Characterization"
        description="Continuous spectroscopic characterization, computer vision classification, and compositional analysis for industrial byproducts."
      />

      {/* Interactive Optical Scanner Viewport */}
      <ScannerViewport
        imageUrl={DEMO_CURRENT_LISTING.image_url}
        sampleCode="SAMPLE-PET-0982-A"
        matrixLabel="Matrix: Rigid Thermoplastic Flakes"
      />

      {/* Real-Time AI Inference Banner */}
      <InferenceBanner
        statusText="AI Material Classification Complete"
        confidenceScore={DEMO_CURRENT_ANALYSIS.ai_confidence}
        materialName={DEMO_CURRENT_ANALYSIS.material}
        description={DEMO_CURRENT_ANALYSIS.ai_summary}
      />

      {/* Real-Time Spectral Breakdown & Composition Card */}
      <SpectralCompositionCard
        resonanceLabel="NIR 1450nm Spectral Range"
        resonanceProfile="λ 1660 cm⁻¹ (C=O Stretch)"
        primaryMaterial="Polyethylene Terephthalate (PET)"
        purityPct={91.8}
        moistureRatio="< 1.2%"
        contaminantsPct="0.4%"
        contaminantsDesc="Trace non-hazardous poly fraction"
        recyclabilityTier="Grade A (Primary)"
        carbonAvoidance={18.4}
      />

      {/* Input Parameters & Operational Manifest Form */}
      <FeedstockManifestForm
        quantity={quantity}
        onQuantityChange={setQuantity}
        grade={grade}
        onGradeChange={setGrade}
        frequency={frequency}
        onFrequencyChange={setFrequency}
        originNode={originNode}
        onOriginNodeChange={setOriginNode}
        quantityInputRef={quantityInputRef}
      />

      {/* Valorization Route Blueprint Snippet */}
      <RecoveryPipelineSnippet
        pipelineTitle="Mechanical De-polymerization → High-Grade Resin Flake"
        pathwayUrl="/app/valorize"
      />

      {/* Action CTA Buttons Stack */}
      <AnalyzeActionButtons onOverrideClick={handleOverrideClick} />

      {/* Technical Honesty & Verification Notice */}
      <div className="text-center py-2 border-t border-slate-200 mt-2">
        <p className="text-xs text-slate-500 font-medium">
          Calibrated to ASTM & ISO-1043 standards • Validated via Multi-Spectral Telemetry & Optical Analysis
        </p>
      </div>
    </div>
  );
};
