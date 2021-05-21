import { AnimatePresence, motion } from "framer-motion";
import { Alert } from "antd";
import "./AlertToast.less";

function AlertToast(props) {
  const { show, message, type, onClose } = props;

  return (
    <div className="w-full flex justify-center">
      <div className="absolute alert-div">
        <AnimatePresence>
          {show && (
            <motion.div
              positionTransition
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <Alert
                  message={message}
                  banner
                  type={type}
                  closable
                  onClose={onClose}
                />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AlertToast;
