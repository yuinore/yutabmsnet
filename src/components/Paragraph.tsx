import React from 'react';
import './Paragraph.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  // 必要に応じて追加のpropsを定義できます
}

/**
 * Paragraph コンポーネント
 *
 * <p> タグの代わりに使用できるコンポーネントです。
 * <p> の中に <div> を入れるとエラーになるため、
 * 代わりに margin-bottom が 1rem の div 要素として実装しています。
 *
 * 使用例:
 * <Paragraph>
 *   <div>Hello!</div>
 * </Paragraph>
 */
export default function Paragraph({ children, className, ...props }: Props): React.ReactNode {
  // デフォルトのクラス名とユーザーが指定したクラス名を結合
  const combinedClassName = `paragraph ${className || ''}`.trim();

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}
