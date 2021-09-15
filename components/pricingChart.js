import styles from '../styles/pricingChart.module.scss';
import CheckIcon from '../public/images/pricing/check.svg';

function PricingChart() {
  return (
    <div className={styles.pricingChart}>
      <h2 className={styles.heading}>Compare</h2>

      <h3 className={styles.featuresHeading}>
        The Features
        <ul className={styles.featuresPlans}>
          <li className={styles.featuresPlan}>Basic</li>
          <li className={styles.featuresPlan}>Pro</li>
          <li className={styles.featuresPlan}>Business</li>
        </ul>
      </h3>

      <div className={styles.feature}>
        <h4 className={styles.featureHeading}>Unlimited Story Posting</h4>

        <div className={styles.featurePlans}>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Basic</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Pro</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Business</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.feature}>
        <h4 className={styles.featureHeading}>Unlimited Photo Upload</h4>

        <div className={styles.featurePlans}>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Basic</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Pro</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Business</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.feature}>
        <h4 className={styles.featureHeading}>Embedding Custom Content</h4>

        <div className={styles.featurePlans}>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Basic</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Pro</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Business</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.feature}>
        <h4 className={styles.featureHeading}>Customise Metadata</h4>

        <div className={styles.featurePlans}>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Basic</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Pro</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Business</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.feature}>
        <h4 className={styles.featureHeading}>Advanced Metrics</h4>

        <div className={styles.featurePlans}>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Basic</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Pro</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Business</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.feature}>
        <h4 className={styles.featureHeading}>Photo Downloads</h4>

        <div className={styles.featurePlans}>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Basic</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Pro</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Business</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.feature}>
        <h4 className={styles.featureHeading}>Search Engine Indexing</h4>

        <div className={styles.featurePlans}>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Basic</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Pro</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Business</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.feature}>
        <h4 className={styles.featureHeading}>Custom Analytics</h4>

        <div className={styles.featurePlans}>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Basic</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Pro</div>
          </div>
          <div className={styles.featurePlan}>
            <div className={styles.featurePlanHeading}>Business</div>
            <div className={styles.checkIconWrapper}>
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingChart;
