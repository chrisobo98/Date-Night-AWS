import React from "react";
import { Button } from "react-bootstrap";
import "./LoaderButton.css";
import { TiRefreshOutline } from 'react-icons/ti';


export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <TiRefreshOutline glyph="refresh" className="spinning" />}
    {!isLoading ? text : loadingText}
  </Button>;
